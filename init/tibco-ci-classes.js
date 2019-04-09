var ci = require("cla/ci");

ci.createRole("Tibco");

ci.createClass("TibcoServer", {
    form: "/plugin/cla-tibco-plugin/form/tibco-node.js",
    icon: "/plugin/cla-tibco-plugin/icon/tibco.svg",
    roles: ["Tibco", "ClariveSE"],
    has: {
        url: {
            is: "rw",
            isa: "Str",
            required: true
        },
        api_url: {
            is: "rw",
            isa: "Str",
            required: true
        },
        key: {
            is: "rw",
            isa: "Str",
            required: true
        },
        secret: {
            is: "rw",
            isa: "Str",
            required: true
        },
        fod_uploader_path: {
            is: "rw",
            isa: "Str",
            required: true
        }
    }
});
