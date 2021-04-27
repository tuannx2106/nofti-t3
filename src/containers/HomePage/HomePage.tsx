/* eslint-disable react/no-unescaped-entities */
import Pusher from 'pusher-js';
import React, { useEffect } from 'react';

import s from './HomePage.module.scss'

interface HomePageProps {
  sampleProps: string
}

const HomePage = (props: HomePageProps) => {
  const { sampleProps } = props

  useEffect(() => {
    const pusher = new Pusher('b704586710340d91ae1f', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('price');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    channel.bind('new-price', (data: any) => {
      console.log(data)
    });
  }, [])

  return (
    <div
      className={s.root}
    >
      <div className={s.container}>
        <div className={s.notiList}>
          <div className={s.noti}>
            <h3 className={s.title}>FPT</h3>
            <p className={s.content}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <p className={s.time}>11:03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
