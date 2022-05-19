import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRelatedTopics,
  getTopicAsync
} from './searchSlice';
import styles from './Search.module.css';

export function Search() {
  const relatedTopics = useSelector(selectRelatedTopics);
  const dispatch = useDispatch();
  const [topicName, setTopicName] = useState('react');

  useEffect(() => {
    (() => {
      dispatch(getTopicAsync(topicName));
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set topic name"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
        />
        <button
          className={styles.button}
          aria-label="Seach"
          onClick={() => dispatch(getTopicAsync(topicName))}
        >
          Search
        </button>
      </div>
      <p>Related topics of "<b>{topicName}</b>":</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Topic</th>
            <th className={styles.th}>Stargazers</th>
          </tr>
        </thead>

        <tbody>
          {
            relatedTopics.map((topic) => {
              return (
                <tr key={topic.id} className={styles.tr}>
                  <td onClick={() => { setTopicName(topic.name); dispatch(getTopicAsync(topic.name)) }} className={styles.tdpointer}>{topic.name}</td>
                  <td className={styles.td}>{topic.stargazerCount}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  );
}
