import * as React from 'react';

type Props = {
  name: string;
};

export function App(props: Props) {
  return (
    <div>Hello! {props.name}</div>
  );
}
