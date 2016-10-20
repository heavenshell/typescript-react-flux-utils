interface Context {
  kind: string
  story: string
}

export class KnobManager {
  constructor();
  knob(name: any, options: any): any;
  wrapStory(channel: any, storyFn: any, context: Context): any;
}

export class KnobStore {
  constructor();
  has(key: string): boolean;
  set(key: string, value: any): void;
  get(key: string): any;
  getAll(): any;
  reset(): void;
  markAllUnused(): void;
  subscribe(cb: any): void;
  unsubscribe(cb: any): void;
}

export function text(name: string, value: any): any;
export function boolean(name: string, value: any): any;
export function number(name: string, value: any): any;
export function object(name: string, value: any): any;
export function select(name: string, options: any): any;
export function date(name: string, value: Date): any;
export function withKnobs(storyFn: any, context: Context): any;
