module.exports = {
    name: "Button Click [Event]",

    description: "When a Button is activated, this event will trigger.",

    category: "Events",

    auto_execute: true,

    inputs: [
    ],

    options: [
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "member",
            "name": "Member",
            "description": "Type: Object\n\nDescription: The button clicker [Member].",
            "types": ["object"]
        },
        {
            "id": "button",
            "name": "Button",
            "description": "Type: Action\n\nDescription: The button message [Message].",
            "types": ["object"]
        }
    ],

    code(cache) {
        this.events.on('clickButton', async (button) => {

                this.StoreOutputValue(button.clicker.member, "member", cache);
                this.StoreOutputValue(button, "button", cache);
                this.RunNextBlock("action", cache);

        });
    }
}