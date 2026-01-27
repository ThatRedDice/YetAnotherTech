declare module "mcjty.lib.gui.ManualEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ManualEntry extends $Record {
static readonly "EMPTY": $ManualEntry

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)
constructor(manual: $ResourceLocation$$Type, entry: $ResourceLocation$$Type, page: integer)

public "manual"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "entry"(): $ResourceLocation
public "page"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualEntry$$Type = ({"page"?: integer, "manual"?: $ResourceLocation$$Type, "entry"?: $ResourceLocation$$Type}) | ([page?: integer, manual?: $ResourceLocation$$Type, entry?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManualEntry$$Original = $ManualEntry;}
