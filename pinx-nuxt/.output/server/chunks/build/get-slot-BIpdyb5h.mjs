function getSlot(instance, slotName = "default", fallback = []) {
  const slots = instance.$slots;
  const slot = slots[slotName];
  if (slot === void 0) return fallback;
  return slot();
}

export { getSlot as g };
//# sourceMappingURL=get-slot-BIpdyb5h.mjs.map
