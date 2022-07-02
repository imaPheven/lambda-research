import React from 'react';
import PropTypes from 'prop-types';

export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask  }) => {
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor="checked" aria-label={`archiveTask-${id}`} className="checkbox">
        <input 
            type="checkbox"
            disabled={true}
            value={title} 
            readOnly={true} 
            name="checked" 
        />
        <span
            className="checkbox-custom"
            onClick={() => onArchiveTask(id)}
        />
      </label>
      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
        {state !== "TASK_ARCHIVED" && (
            <button
                className="pin-button"
                onClick={() => onPinTask(id)}
                id={`pinTask-${id}`}
                aria-label={`pinTask-${id}`}
                key={`pinTask-${id}`}
            >
                <span className={`icon-star`} />
            </button>
        )}
      </label>
    </div>
  );
}

Task.propTypes = {
    task: PropTypes.shape({
        /**
         * Is this the principal call to action on the page?
         */
        id: PropTypes.string,
        /**
         * What background color to use
         */
        title: PropTypes.string,
        /**
         * How large should the button be?
         */
        state: PropTypes.string,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
  };
Task.defaultProps = {
    task: {
        state: 'TASK_INBOX',
    },
    onArchiveTask: () => { console.log('archive task')},
    onPinTask: () => { console.log('archive task')}
};