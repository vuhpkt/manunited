import { legends } from './util/storage.js';
const init = {
    legends: legends,
    modalIndex: null,
    type: null,
};

const actions = {
    showModal(state, type, i = null) {
        state.modalIndex = i;
        state.type = type;
    },
    closeModal(state) {
        console.log('close modal');
        state.legends[state.modalIndex] && (state.legends[state.modalIndex].animated = true);
        state.modalIndex = null;
        state.type = null;
    },
    changeView({ legends, modalIndex }, view) {
        legends[modalIndex].animated = false;
        legends[modalIndex].view = view;
    },
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}
