import { inject, getCurrentInstance, watch } from 'vue';

function useInjectionInstanceCollection(injectionName, collectionKey, registerKeyRef) {
  var _a;
  const injection = inject(injectionName, null);
  if (injection === null) return;
  const vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
  watch(registerKeyRef, registerInstance);
  registerInstance(registerKeyRef.value);
  function registerInstance(key, oldKey) {
    if (!injection) return;
    const collection = injection[collectionKey];
    if (oldKey !== void 0) removeInstance(collection, oldKey);
    if (key !== void 0) addInstance(collection, key);
  }
  function removeInstance(collection, key) {
    if (!collection[key]) collection[key] = [];
    collection[key].splice(collection[key].findIndex((instance) => instance === vm), 1);
  }
  function addInstance(collection, key) {
    if (!collection[key]) collection[key] = [];
    if (!~collection[key].findIndex((instance) => instance === vm)) {
      collection[key].push(vm);
    }
  }
}
function useInjectionCollection(injectionName, collectionKey, valueRef) {
  const injection = inject(injectionName, null);
  if (injection === null) return;
  if (!(collectionKey in injection)) {
    injection[collectionKey] = [];
  }
  injection[collectionKey].push(valueRef.value);
  watch(valueRef, (value, prevValue) => {
    const collectionArray = injection[collectionKey];
    const index = collectionArray.findIndex((collectionValue) => collectionValue === prevValue);
    if (~index) collectionArray.splice(index, 1);
    collectionArray.push(value);
  });
}
function useInjectionElementCollection(injectionName, collectionKey, getElement) {
  const injection = inject(injectionName, null);
  if (injection === null) return;
  if (!(collectionKey in injection)) {
    injection[collectionKey] = [];
  }
}

export { useInjectionCollection as a, useInjectionElementCollection as b, useInjectionInstanceCollection as u };
//# sourceMappingURL=use-collection-Dfn99m8m.mjs.map
