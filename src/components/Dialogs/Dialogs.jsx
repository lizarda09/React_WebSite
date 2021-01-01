import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className="dialog_items">
                <div className={classes.dialog}>
                    Liza
                </div>
                <div className={classes.dialog}>
                    Kolya
                </div>
                <div className={classes.dialog}>
                    Masha
                </div>
            </div>
            <div className="messages">
                <div className={classes.mess}>Hello</div>
                <div className={classes.mess}>Yo</div>
                <div className={classes.mess}>Kek</div>
            </div>
        </div>


    )
}

export default Dialogs;