declare module "owmii.powah.util.Ticker" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $Ticker {
constructor(arg0: double)

public "onward"(): void
public "ended"(): boolean
public "perCent"(): double
public "back"(): void
public "back"(arg0: double): void
public "reset"(): void
public "isEmpty"(): boolean
public "add"(arg0: double): void
public static "empty"(): $Ticker
public "write"(arg0: $CompoundTag$$Type, arg1: StringJS): void
public "read"(arg0: $CompoundTag$$Type, arg1: StringJS): void
public "setAll"(arg0: double): void
public "getMax"(): double
public "getEmpty"(): double
public "getTicks"(): double
public "setMax"(arg0: double): void
public "setTicks"(arg0: double): void
public "subSized"(): float
public static "delayed"(arg0: double): boolean
set "all"(value: double)
get "max"(): double
get "ticks"(): double
set "max"(value: double)
set "ticks"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ticker$$Type = ($Ticker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ticker$$Original = $Ticker;}
