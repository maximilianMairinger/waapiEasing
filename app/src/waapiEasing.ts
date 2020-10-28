import baz from "bezier-easing"
import { camelCase, paramCase } from "change-case"
import constructAttachToPrototype from "attatch-to-prototype"

export type easingKeyWordCamelCase = "linear" | "ease" | "easeIn" | "easeOut" | "easeInOut"
export type easingKeyWordDashCase  = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"
export type easingKeyWord = easingKeyWordCamelCase | easingKeyWordDashCase

export class Easing {
  public static readonly keywords: {[qwe in easingKeyWordCamelCase]: number[]} = {
    linear:     [.25, .25, .75, .75],
    ease:       [.25, .1 , .25, 1  ],
    easeIn:     [.42, 0  , 1  , 1  ],
    easeOut:    [0  , 0  , .58, 1  ],
    easeInOut:  [.42, 0  , .58, 1  ]
  }
  private ax: number
  private ay: number
  private bx: number
  private by: number
  private keyword: string
  constructor(keyword: easingKeyWord)
  constructor(ax: number, ay: number, bx: number, by: number)
  constructor(ax_keyword: number | easingKeyWord, ay?: number, bx?: number, by?: number) {
    if (typeof ax_keyword !== "number") {
      this.keyword = ax_keyword
    }
    else {
      this.ax = ax_keyword
      this.ay = ay
      this.bx = bx
      this.by = by
    }
  }
  public get string() {
    return (constructAttachToPrototype(this)("function", {value: this.keyword === undefined ? "cubic-bezier(" + this.ax + "," +  this.ay + "," +  this.bx + "," +  this.by + ")" : paramCase(this.keyword)}) as any).value
  }
  public get function() {
    if (this.ax === undefined) {
      let f = Easing.keywords[camelCase(this.keyword)]
      this.ax = f[0]
      this.ay = f[1]
      this.bx = f[2]
      this.by = f[3]
    }
    return (constructAttachToPrototype(this)("function", {value: baz(this.ax, this.ay, this.bx, this.by), writable: false}) as any).value
  }
}

export default Easing