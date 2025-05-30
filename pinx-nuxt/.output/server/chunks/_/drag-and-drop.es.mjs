var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
/**
  * vue-cal v4.10.2
  * (c) 2025 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const holdOverTimeout = 800;
let changeViewTimeout = null;
let pressPrevOrNextInterval = null;
let viewBeforeDrag = { id: null, date: null };
let viewChanged = false;
let cancelViewChange = true;
let dragOverCell = { el: null, cell: null, timeout: null };
const dragging = {
  _eid: null,
  fromVueCal: null,
  toVueCal: null
};
const DragAndDrop = class {
  constructor(vuecal) {
    __publicField(this, "_vuecal");
    this._vuecal = vuecal;
  }
  /**
   * When click and drag an event the cursor can be anywhere in the event,
   * when dropping the event, we need to subtract the cursor position in the event.
   *
   * @param {Object} e The associated DOM event.
   */
  _getEventStart(e) {
    const { timeStep, timeCellHeight, timeFrom, utils } = this._vuecal;
    let { y } = utils.cell.getPosition(e);
    y -= e.dataTransfer.getData("cursor-grab-at") * 1;
    return Math.round(y * timeStep / parseInt(timeCellHeight) + timeFrom);
  }
  /**
   * On drop, update the event start and end date directly into the event.
   *
   * @param {Object} e The associated DOM event.
   * @param {Object} event The event being dragged.
   * @param {Object} transferData The transfer data from the HTML5 dragging event.
   * @param {Date} cellDate The hovered cell starting date.
   */
  _updateEventStartEnd(e, event, transferData, cellDate) {
    const eventDuration = transferData.duration * 1 || event.endTimeMinutes - event.startTimeMinutes;
    let startTimeMinutes = Math.max(this._getEventStart(e), 0);
    if (this._vuecal.snapToTime) {
      const plusHalfSnapTime = startTimeMinutes + this._vuecal.snapToTime / 2;
      startTimeMinutes = plusHalfSnapTime - plusHalfSnapTime % this._vuecal.snapToTime;
    }
    event.startTimeMinutes = startTimeMinutes;
    event.start = new Date(new Date(cellDate).setMinutes(startTimeMinutes));
    event.endTimeMinutes = Math.min(startTimeMinutes + eventDuration, 24 * 60);
    event.end = new Date(new Date(cellDate).setMinutes(event.endTimeMinutes));
  }
  /**
   * On event drag start, only possible if editableEvent is true.
   * /!\ This is using the native HTML5 drag & drop, not supported on touch devices.
   *
   * @param {Object} e The associated DOM event.
   * @param {Object} event The event being dragged.
   */
  eventDragStart(e, event) {
    if (e.target.nodeType === 3) return e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("event", JSON.stringify(event));
    e.dataTransfer.setData("cursor-grab-at", e.offsetY);
    const { clickHoldAnEvent } = this._vuecal.domEvents;
    setTimeout(() => {
      clickHoldAnEvent._eid = null;
      clearTimeout(clickHoldAnEvent.timeoutId);
      event.deleting = false;
    }, 0);
    this._vuecal.domEvents.dragAnEvent._eid = event._eid;
    dragging._eid = event._eid;
    dragging.fromVueCal = this._vuecal._.uid;
    event.dragging = true;
    setTimeout(() => event.draggingStatic = true, 0);
    viewChanged = false;
    viewBeforeDrag = { id: this._vuecal.view.id, date: this._vuecal.view.startDate };
    cancelViewChange = true;
  }
  /**
   * On event drag end, when releasing the event.
   *
   * @param {Object} event The event being dragged.
   */
  eventDragEnd(event) {
    this._vuecal.domEvents.dragAnEvent._eid = null;
    dragging._eid = null;
    event.dragging = false;
    event.draggingStatic = false;
    const { fromVueCal, toVueCal } = dragging;
    if (toVueCal && fromVueCal !== toVueCal) this._vuecal.utils.event.deleteAnEvent(event);
    dragging.fromVueCal = null;
    dragging.toVueCal = null;
    if (viewChanged && cancelViewChange && viewBeforeDrag.id) this._vuecal.switchView(viewBeforeDrag.id, viewBeforeDrag.date, true);
  }
  /**
   * On cell/split enter with a dragging event.
   * Highlight the cell, and if on `years`, `year`, `month` view,
   * set a timer to go deeper on drag hold over this cell.
   *
   * @param {Object} e The associated DOM event.
   * @param {Object} cell The cell component's $data.
   * @param {Date} cellDate The hovered cell starting date.
   */
  cellDragEnter(e, cell, cellDate) {
    const target = e.currentTarget;
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (target === dragOverCell.el || !target.className.includes("vuecal__cell-content")) return false;
    if (dragOverCell.el) dragOverCell.cell.highlighted = false;
    dragOverCell = { el: target, cell, timeout: clearTimeout(dragOverCell.timeout) };
    cell.highlighted = true;
    if (["years", "year", "month"].includes(this._vuecal.view.id)) {
      dragOverCell.timeout = setTimeout(() => this._vuecal.switchToNarrowerView(cellDate), 2e3);
    }
  }
  /**
   * On cell/split drag over, highlight the cell being hovered,
   * Useful when starting to drag event on the same cell/split it's in.
   * Warning: This is fired repeatedly as long as you stay over this cell/split.
   *
   * @param {Object} e The associated DOM event.
   * @param {Object} cell The cell component's $data.
   * @param {Date} cellDate The hovered cell starting date.
   * @param {Number|String} split The optional split being hovered if any.
   */
  cellDragOver(e, cell, cellDate, split) {
    e.preventDefault();
    cell.highlighted = true;
    if (split || split === 0) cell.highlightedSplit = split;
  }
  /**
   * When event drag leaves a cell/split.
   * Remove the cell/split highlighted state.
   * Warning: cell dragleave event happens AFTER another cell dragenter!
   *
   * @param {Object} e The associated DOM event.
   * @param {Object} cell The cell component's $data.
   */
  cellDragLeave(e, cell) {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    cell.highlightedSplit = false;
    if (dragOverCell.cell === cell) {
      clearTimeout(dragOverCell.timeout);
      dragOverCell = { el: null, cell: null, timeout: null };
      cell.highlighted = false;
    }
  }
  /**
   * On successful event drop into a cell/split.
   * Change the event start and end time and remove the event dragging state
   * and cell/split highlighted state.
   *
   * @param {Object} e The associated DOM event.
   * @param {Object} cell The cell component's $data.
   * @param {Date} cellDate The hovered cell starting date.
   * @param {Number|String} split The optional split being dropped into, if any.
   */
  cellDragDrop(e, cell, cellDate, split) {
    e.preventDefault();
    clearTimeout(dragOverCell.timeout);
    dragOverCell = { el: null, cell: null, timeout: null };
    const transferData = JSON.parse(e.dataTransfer.getData("event") || "{}");
    let event, addToView;
    if (dragging.fromVueCal !== this._vuecal._.uid) {
      const { _eid, start, end, duration, ...cleanTransferData } = transferData;
      event = this._vuecal.utils.event.createAnEvent(cellDate, duration, { ...cleanTransferData, split });
    } else {
      event = this._vuecal.view.events.find((evt) => evt._eid === dragging._eid);
      if (!event) {
        event = this._vuecal.mutableEvents.find((evt) => evt._eid === dragging._eid);
        addToView = !!event;
      }
      if (!event) {
        const duration = transferData.endTimeMinutes - transferData.startTimeMinutes;
        const { start, end, ...cleanTransferData } = transferData;
        event = this._vuecal.utils.event.createAnEvent(cellDate, duration, { ...cleanTransferData, split });
      }
    }
    const { start: oldDate, split: oldSplit } = event;
    this._updateEventStartEnd(e, event, transferData, cellDate);
    if (addToView) this._vuecal.addEventsToView([event]);
    event.dragging = false;
    if (split || split === 0) event.split = split;
    cell.highlighted = false;
    cell.highlightedSplit = null;
    cancelViewChange = false;
    dragging.toVueCal = this._vuecal._.uid;
    const params = {
      event: this._vuecal.cleanupEvent(event),
      oldDate,
      newDate: event.start,
      ...(split || split === 0) && { oldSplit, newSplit: split },
      originalEvent: this._vuecal.cleanupEvent(transferData),
      external: !dragging.fromVueCal
      // If external event, not coming from any Vue Cal.
    };
    this._vuecal.$emit("event-drop", params);
    this._vuecal.$emit("event-change", { event: params.event, originalEvent: params.originalEvent });
    setTimeout(() => {
      if (dragging._eid) this.eventDragEnd(event);
    }, 300);
  }
  /**
   * On drag enter on a view button or on today, prev & next buttons.
   * Sets a highlighted state on the hovered button, and go to requested view.
   *
   * @param {Object} e The associated DOM event.
   * @param {String} id The id of the header element being hovered. One of:
   *                    previous, next, today, years, year, month, week, day.
   * @param {Object} headerData The header component's $data.
   */
  viewSelectorDragEnter(e, id, headerData) {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    headerData.highlightedControl = id;
    clearTimeout(changeViewTimeout);
    changeViewTimeout = setTimeout(() => {
      if (["previous", "next"].includes(id)) {
        this._vuecal[id]();
        clearInterval(pressPrevOrNextInterval);
        pressPrevOrNextInterval = setInterval(this._vuecal[id], holdOverTimeout);
      } else if (id === "today") {
        clearInterval(pressPrevOrNextInterval);
        let viewId;
        if (this._vuecal.view.id.includes("year")) {
          viewId = this._vuecal.enabledViews.filter((view) => !view.includes("year"))[0];
        }
        this._vuecal.switchView(viewId || this._vuecal.view.id, new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), true);
      } else this._vuecal.switchView(id, null, true);
      viewChanged = true;
    }, holdOverTimeout);
  }
  /**
   * On drag leave on a view button or on today, prev & next buttons.
   * Removes the highlighted state on the hovered button, and cancel the timer to
   * go to the requested view.
   *
   * @param {Object} e The associated DOM event.
   * @param {String} id The id of the header element being hovered. One of:
   *                    previous, next, today, years, year, month, week, day.
   * @param {Object} headerData The header component's $data.
   */
  viewSelectorDragLeave(e, id, headerData) {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (headerData.highlightedControl === id) {
      headerData.highlightedControl = null;
      if (changeViewTimeout) changeViewTimeout = clearTimeout(changeViewTimeout);
      if (pressPrevOrNextInterval) pressPrevOrNextInterval = clearInterval(pressPrevOrNextInterval);
    }
  }
};

export { DragAndDrop };
//# sourceMappingURL=drag-and-drop.es.mjs.map
