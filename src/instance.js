// Method.
const Instance = (ClassName, Properties, Attributes) => {
    // Create the element.
    const NewElement = document.createElement(ClassName);

    // If properties exists.
    if (Properties && typeof(Properties) === "object" && Object.keys(Properties).length > 0) {
        // Apply properties.
        for (const [Key, Value] of Object.entries(Properties)) {
            // If the property is parent.
            if (Key === "parent") {
                // Verify the value is an instance.
                if (Value instanceof HTMLElement) {
                    // Parent the new element to the instance.
                    Value.appendChild(NewElement);
                } else {
                    // Warn invalid parent type.
                    console.warn(`Failed to add parent to new instance, invalid parent type.`)
                }
            } else if (Key === "events" && typeof Value === "object") {
                // For each event and handler.
                for (const [Event, Handler] of Object.entries(Value)) {
                    // If the handler and event type is valid.
                    if (typeof Handler === "function" && typeof Event === "string") {
                        // Attempt to add the event.
                        try {
                            // Add event listener.
                            NewElement.addEventListener(Event, Handler);
                        } catch (Err) {
                            // Throw the error.
                            console.warn(`Failed to attach event "${Event}".`);
                        }
                    }
                }
            } else {
                NewElement[Key] = Value;
            }
        }
    }

    // If attributes exists.
    if (Attributes && typeof Attributes === "object" && Object.keys(Attributes).length > 0) {
        // Apply attributes.
        for (const [Key, Value] of Object.entries(Attributes)) {
            // Apply the attribute.
            NewElement.setAttribute(Key, Value);
        }
    }

    // Return.
    return NewElement;
}

// Export.
export default Instance;