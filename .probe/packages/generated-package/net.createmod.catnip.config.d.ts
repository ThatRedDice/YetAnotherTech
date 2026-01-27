declare module "net.createmod.catnip.config.ConfigBase$ConfigBool" {
import {$ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$CValue} from "net.createmod.catnip.config.ConfigBase$CValue"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"

export class $ConfigBase$ConfigBool extends $ConfigBase$CValue<(boolean), ($ModConfigSpec$BooleanValue)> {
constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: boolean, ...arg3: (StringJS)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigBool$$Type = ($ConfigBase$ConfigBool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigBase$ConfigBool$$Original = $ConfigBase$ConfigBool;}
declare module "net.createmod.catnip.config.ConfigBase$ConfigGroup" {
import {$ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$CValue} from "net.createmod.catnip.config.ConfigBase$CValue"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ConfigBase$ConfigGroup extends $ConfigBase$CValue<(boolean), ($ModConfigSpec$BooleanValue)> {
constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: integer, ...arg3: (StringJS)[])

public "register"(arg0: $ModConfigSpec$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigGroup$$Type = ($ConfigBase$ConfigGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigBase$ConfigGroup$$Original = $ConfigBase$ConfigGroup;}
declare module "net.createmod.catnip.config.ConfigBase" {
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ConfigBase {
 "specification": $ModConfigSpec

constructor()

public "onReload"(): void
public "getName"(): StringJS
public "onLoad"(): void
public "registerAll"(arg0: $ModConfigSpec$Builder$$Type): void
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$$Type = ($ConfigBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigBase$$Original = $ConfigBase;}
declare module "net.createmod.catnip.config.ConfigBase$ConfigInt" {
import {$ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$CValue} from "net.createmod.catnip.config.ConfigBase$CValue"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $ConfigBase$ConfigInt extends $ConfigBase$CValue<(integer), ($ModConfigSpec$IntValue)> {
constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer, ...arg5: (StringJS)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigInt$$Type = ($ConfigBase$ConfigInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigBase$ConfigInt$$Original = $ConfigBase$ConfigInt;}
