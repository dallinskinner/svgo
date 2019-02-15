exports.type = "perItem";

exports.active = true;

exports.description = "removes fill if not set to none";

/**
 * Remove fills that are not set to none
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Dallin Skinner
 */
exports.fn = function(item) {
    if (item.elem) {
        item.eachAttr(function(attr) {
            if (attr.name === "fill" && attr.value !== "none") {
                item.removeAttr(attr.name);
            }
        });
    }
};
