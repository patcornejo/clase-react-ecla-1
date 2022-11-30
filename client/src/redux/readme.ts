// Actions
function getOptions() {
    // fetch(...)
}

function createOption() {

}

function updOption() {

}

function delOption() {
    // C.R.U.D.
}

// Reducers - Controlador del Store
const reducer = (state = [], action) => {
    switch (action) {
        case "ACTION_1":
            return {success: true, options: ["", "", ""]}
    }
}

// Store - Data Warehouse - Base de datos - Store.
const store = [
    "string", 10, {}, []
]

// (createStore - configurateStore) - useReducer (Hooks)
