declare module "dan200.computercraft.core.input.UserComputerInput" {
import {$Terminal$$Type} from "dan200.computercraft.core.terminal.Terminal"
import {$ComputerInput$$Type, $ComputerInput$$Interface} from "dan200.computercraft.core.input.ComputerInput"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $UserComputerInput implements $ComputerInput$$Interface {
constructor(arg0: $ComputerInput$$Type, arg1: $Terminal$$Type)
constructor(arg0: $ComputerInput$$Type, arg1: boolean, arg2: integer, arg3: integer)

public "paste"(arg0: $ByteBuffer$$Type): void
public "paste"(arg0: StringJS): void
public "mouseClick"(arg0: integer, arg1: integer, arg2: integer): void
public "mouseClick"(arg0: integer): void
public "codepointTyped"(arg0: integer): void
public "releaseInputs"(): void
public "keyUp"(arg0: integer): void
public "keyDown"(arg0: integer, arg1: boolean): void
public "keyDown"(arg0: integer): void
public "mouseUp"(arg0: integer): void
public "mouseUp"(arg0: integer, arg1: integer, arg2: integer): void
public "mouseScroll"(arg0: integer): void
public "mouseScroll"(arg0: integer, arg1: integer, arg2: integer): void
public "mouseDrag"(arg0: integer, arg1: integer, arg2: integer): void
public "charTyped"(arg0: byte): void
public "mouseMove"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserComputerInput$$Type = ($UserComputerInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserComputerInput$$Original = $UserComputerInput;}
declare module "dan200.computercraft.core.input.ComputerInput" {
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export interface $ComputerInput$$Interface {
}

export class $ComputerInput implements $ComputerInput$$Interface {
 "paste"(arg0: $ByteBuffer$$Type): void
 "mouseClick"(arg0: integer, arg1: integer, arg2: integer): void
 "keyUp"(arg0: integer): void
 "keyDown"(arg0: integer, arg1: boolean): void
 "mouseUp"(arg0: integer, arg1: integer, arg2: integer): void
 "mouseScroll"(arg0: integer, arg1: integer, arg2: integer): void
 "mouseDrag"(arg0: integer, arg1: integer, arg2: integer): void
 "charTyped"(arg0: byte): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerInput$$Type = ($ComputerInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerInput$$Original = $ComputerInput;}
