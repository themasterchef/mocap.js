"use strict";

// Take a whole skeleton's worth of data
// and just pull out the bits of interest to you
define([
], function () {
    var extractJointData = function (jointId, skeleton) {
        var joint = skeleton[jointId];
        
        if (joint) {
            return {
                position: joint.position,
                rotation: joint.rotation
            };
        } else {
            return null;
        }
    };
    
    return {
        extract: extractJointData
    };
});