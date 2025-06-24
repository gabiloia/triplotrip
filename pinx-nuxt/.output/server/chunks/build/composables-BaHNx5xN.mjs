import { inject } from 'vue';
import { O as dialogApiInjectionKey, t as throwError } from './server.mjs';

function useDialog() {
  const dialog = inject(dialogApiInjectionKey, null);
  if (dialog === null) {
    throwError("use-dialog", "No outer <n-dialog-provider /> founded.");
  }
  return dialog;
}

export { useDialog as u };
//# sourceMappingURL=composables-BaHNx5xN.mjs.map
