/**
 * @file   mofron-comp-facebooksignin/index.js
 * @author simpart
 */
let mf = require('mofron');
let Frame  = require('mofron-comp-frame');
let Margin = require('mofron-layout-margin');
let tHoriz = require('mofron-effect-txthoriz');
let Click  = require('mofron-event-click');

/**
 * @class mofron.comp.facebooksignin
 * @brief social signin button component for mofron
 */
mf.comp.SocialSignin = class extends Frame {
    
    constructor (po) {
        try {
            super();
            this.name('SocialSignin');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.addLayout(new Margin('left', 5));
            this.addEffect(new tHoriz());
            this.addEvent(
                new Click(
                    (fb) => {
                        try {
                            let fnc = fb.authFunc();
                            if (null !== fnc) {
                                fnc[0](fnc);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }
                )
            );
            this.radius(3);
            this.size(200, 50);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    authFunc (fnc, prm) {
        if (undefined === fnc) {
            /* getter */
            return (undefined === this.m_authfnc)? null : this.m_authfnc;
        }
        /* setter */
        this.m_authfnc = [fnc, prm];
    }
    
    text (prm) {
        try {
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.SocialSignin;
/* end of file */
