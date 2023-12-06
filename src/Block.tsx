import React from 'react';
import { Point } from './interfaces';
import { CONSTANTS } from './constants';

export function Block(props: {
  point: Point;
  color: string;
}) {
  const style: React.CSSProperties = {
    position: 'absolute',
    left: props.point.x * CONSTANTS.BlockWidth + 'vw',
    bottom: props.point.y * CONSTANTS.BlockHeight + 'vh',
    width: CONSTANTS.BlockWidth + 'vw',
    height: CONSTANTS.BlockHeight + 'vh',
    backgroundColor: props.color,
    border: `1px solid black`,
  };
  return (
    <div style={style} />
  )
}

export function getGrid(): Point[] {
  const out: Point[] = [];
  for (let x = 0; x < CONSTANTS.MaxX; x++) {
    for (let y = 0; y < CONSTANTS.MaxY; y++) {
      out.push({ x, y });
    }
  }
  return out;
}