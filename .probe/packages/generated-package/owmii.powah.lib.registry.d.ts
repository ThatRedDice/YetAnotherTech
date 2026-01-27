declare module "owmii.powah.lib.registry.IVariant$Single" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Enum} from "java.lang.Enum"
import {$IVariant, $IVariant$$Interface} from "owmii.powah.lib.registry.IVariant"

export class $IVariant$Single extends $Enum<($IVariant$Single)> implements $IVariant$$Interface<($IVariant$Single)> {
static readonly "SINGLE": $IVariant$Single

public "getVariants"(): ($IVariant$Single)[]
public static "values"(): ($IVariant$Single)[]
public static "valueOf"(arg0: StringJS): $IVariant$Single
public "getName"(): StringJS
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$$Type, arg1: $IVariant$Single$$Type, arg2: StringJS): $CompoundTag
public "read"(arg0: $CompoundTag$$Type, arg1: StringJS): $IVariant$Single
public "ordinal"(): integer
public static "getEmpty"<T extends $IVariant<(object)>>(): T
get "variants"(): ($IVariant$Single)[]
get "name"(): StringJS
get "empty"(): boolean
public static get "empty"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariant$Single$$Type = (("single"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariant$Single$$Original = $IVariant$Single;}
declare module "owmii.powah.lib.registry.IVariant" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export interface $IVariant$$Interface<V extends $Enum<(object)>> {
get "variants"(): (V)[]
get "name"(): StringJS
get "empty"(): boolean
public static get "empty"(): T
}

export class $IVariant<V extends $Enum<(object)>> implements $IVariant$$Interface {
 "getVariants"(): (V)[]
 "getName"(): StringJS
 "isEmpty"(): boolean
 "write"(arg0: $CompoundTag$$Type, arg1: V, arg2: StringJS): $CompoundTag
 "read"(arg0: $CompoundTag$$Type, arg1: StringJS): V
 "ordinal"(): integer
static "getEmpty"<T extends $IVariant<(object)>>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariant$$Type<V> = ($IVariant<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariant$$Original<V> = $IVariant<(V)>;}
declare module "owmii.powah.lib.registry.IVariantEntry" {
import {$IVariant, $IVariant$$Type} from "owmii.powah.lib.registry.IVariant"

export interface $IVariantEntry$$Interface<V extends $IVariant<(object)>, R extends $IVariantEntry<(object), (object)>> {

(): V
get "variant"(): V
}

export class $IVariantEntry<V extends $IVariant<(object)>, R extends $IVariantEntry<(object), (object)>> implements $IVariantEntry$$Interface {
 "getVariant"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantEntry$$Type<V, R> = (() => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariantEntry$$Original<V, R> = $IVariantEntry<(V), (R)>;}
