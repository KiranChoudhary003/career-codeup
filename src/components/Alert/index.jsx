import { Fragment, useState } from "react";
import { createRoot } from "react-dom/client";

/* ---------------- Internal State ---------------- */

let root = null;
let updateState = null;

/* ---------------- Alert UI ---------------- */

const Alert = ({ show, message, onClose, buttons }) => {
    if (!show) return null;

    const isLoading = !message;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 flex flex-col items-center">
                {isLoading ? (
                    <div className="py-10">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-codeup-blue rounded-full animate-spin" />
                    </div>
                ) : (
                    <>
                        {/* Message */}
                        <div className="text-center text-lg font-medium mb-6 min-h-[80px] flex items-center justify-center">
                            {typeof message === "string"
                                ? message.split("\n").map((line, index) => (
                                      <Fragment key={index}>
                                          {line}
                                          <br />
                                      </Fragment>
                                  ))
                                : message}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 w-full justify-end">
                            {buttons ? (
                                buttons
                            ) : (
                                <button onClick={onClose} className="btn-primary">
                                    Okay
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

/* ---------------- Manager ---------------- */

const AlertManager = () => {
    const [state, setState] = useState({
        show: false,
        message: null,
        onClose: null,
        buttons: null,
    });

    updateState = setState;

    const handleClose = () => {
        setState({
            show: false,
            message: null,
            onClose: null,
            buttons: null,
        });

        if (typeof state.onClose === "function") {
            state.onClose();
        }
    };

    return <Alert show={state.show} message={state.message} onClose={handleClose} buttons={state.buttons} />;
};

/* ---------------- Public API ---------------- */

// Call once when app starts (e.g. in App.jsx)
export const mountAlertManager = () => {
    if (!root) {
        const container = document.createElement("div");
        document.body.appendChild(container);
        root = createRoot(container);
        root.render(<AlertManager />);
    }
};

// Show / update alert
export const codeupAlert = (message, onClose, buttons = null) => {
    if (!updateState) {
        console.warn("Alert manager not mounted. Call mountAlertManager() first.");
        return;
    }

    updateState({
        show: true,
        message,
        onClose,
        buttons,
    });
};

// Close programmatically
codeupAlert.close = () => {
    if (!updateState) return;

    updateState({
        show: false,
        message: null,
        onClose: null,
        buttons: null,
    });
};
