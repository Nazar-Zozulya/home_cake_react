import { create } from 'zustand';

type ModalType = 'order' | 'selfOrder' | 'verify' | 'error' | 'cart' | null;

interface ModalStore {
    activeModal: ModalType;
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
    switchModal: (modal: ModalType) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    activeModal: null,
    openModal: (modal) => set({ activeModal: modal }),
    closeModal: () => set({ activeModal: null }),
    switchModal: (modal) => set({ activeModal: modal }),
}));
