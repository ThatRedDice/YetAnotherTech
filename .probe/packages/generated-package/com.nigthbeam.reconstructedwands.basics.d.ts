declare module "com.nigthbeam.reconstructedwands.basics.option.WandUpgrades" {
import {$ArrayList} from "java.util.ArrayList"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IWandUpgrade, $IWandUpgrade$$Type} from "com.nigthbeam.reconstructedwands.api.IWandUpgrade"

export class $WandUpgrades<T extends $IWandUpgrade> {
constructor(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: T)

public "hasUpgrade"(arg0: T): boolean
public "addUpgrade"(arg0: T): boolean
public "getUpgrades"(): $ArrayList<(T)>
get "upgrades"(): $ArrayList<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandUpgrades$$Type<T> = ($WandUpgrades<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandUpgrades$$Original<T> = $WandUpgrades<(T)>;}
declare module "com.nigthbeam.reconstructedwands.basics.option.IOption" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IOption$$Interface<T> {
get "keyTranslation"(): StringJS
get "valueTranslation"(): StringJS
get "descTranslation"(): StringJS
get "enabled"(): boolean
get "key"(): StringJS
get "valueString"(): StringJS
set "valueString"(value: StringJS)
}

export class $IOption<T> implements $IOption$$Interface {
 "getKeyTranslation"(): StringJS
 "getValueTranslation"(): StringJS
 "getDescTranslation"(): StringJS
 "fromNBT"(arg0: $CompoundTag$$Type): void
 "get"(): T
 "next"(): void
 "next"(arg0: boolean): void
 "isEnabled"(): boolean
 "getKey"(): StringJS
 "set"(arg0: T): void
 "getValueString"(): StringJS
 "toNBT"(arg0: $CompoundTag$$Type): void
 "setValueString"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOption$$Type<T> = ($IOption<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOption$$Original<T> = $IOption<(T)>;}
declare module "com.nigthbeam.reconstructedwands.basics.option.WandOptions$MATCH" {
import {$Enum} from "java.lang.Enum"

export class $WandOptions$MATCH extends $Enum<($WandOptions$MATCH)> {
static readonly "EXACT": $WandOptions$MATCH
static readonly "ANY": $WandOptions$MATCH
static readonly "SIMILAR": $WandOptions$MATCH

public static "values"(): ($WandOptions$MATCH)[]
public static "valueOf"(arg0: StringJS): $WandOptions$MATCH
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$MATCH$$Type = (("exact") | ("similar") | ("any"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandOptions$MATCH$$Original = $WandOptions$MATCH;}
declare module "com.nigthbeam.reconstructedwands.basics.option.WandOptions" {
import {$IOption} from "com.nigthbeam.reconstructedwands.basics.option.IOption"
import {$WandOptions$MATCH} from "com.nigthbeam.reconstructedwands.basics.option.WandOptions$MATCH"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$OptionEnum} from "com.nigthbeam.reconstructedwands.basics.option.OptionEnum"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WandOptions$DIRECTION} from "com.nigthbeam.reconstructedwands.basics.option.WandOptions$DIRECTION"
import {$WandOptions$LOCK, $WandOptions$LOCK$$Type} from "com.nigthbeam.reconstructedwands.basics.option.WandOptions$LOCK"
import {$IWandCore} from "com.nigthbeam.reconstructedwands.api.IWandCore"
import {$WandUpgradesSelectable} from "com.nigthbeam.reconstructedwands.basics.option.WandUpgradesSelectable"
import {$IWandUpgrade$$Type} from "com.nigthbeam.reconstructedwands.api.IWandUpgrade"
import {$OptionBoolean} from "com.nigthbeam.reconstructedwands.basics.option.OptionBoolean"

export class $WandOptions {
readonly "random": $OptionBoolean
readonly "cores": $WandUpgradesSelectable<($IWandCore)>
readonly "replace": $OptionBoolean
readonly "match": $OptionEnum<($WandOptions$MATCH)>
readonly "lock": $OptionEnum<($WandOptions$LOCK)>
 "tag": $CompoundTag
readonly "allOptions": ($IOption<(never)>)[]
readonly "direction": $OptionEnum<($WandOptions$DIRECTION)>

constructor(arg0: $ItemStack$$Type)

public "matchBlocks"(arg0: $Block$$Type, arg1: $Block$$Type): boolean
public "testLock"(arg0: $WandOptions$LOCK$$Type): boolean
public "hasUpgrade"(arg0: $IWandUpgrade$$Type): boolean
public "addUpgrade"(arg0: $IWandUpgrade$$Type): boolean
public "get"(arg0: StringJS): $IOption<(never)>
public "save"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$$Type = ($WandOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandOptions$$Original = $WandOptions;}
declare module "com.nigthbeam.reconstructedwands.basics.option.OptionEnum" {
import {$IOption$$Interface} from "com.nigthbeam.reconstructedwands.basics.option.IOption"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $OptionEnum<E extends $Enum<(object)>> implements $IOption$$Interface<(E)> {
constructor(arg0: StringJS, arg1: E)

public "getKeyTranslation"(): StringJS
public "getValueTranslation"(): StringJS
public "getDescTranslation"(): StringJS
public "fromNBT"(arg0: $CompoundTag$$Type): void
public "get"(): any
public "next"(): void
public "next"(arg0: boolean): void
public "isEnabled"(): boolean
public "getKey"(): StringJS
public "set"(arg0: any): void
public "set"(arg0: E): void
public "getValueString"(): StringJS
public "setEnabled"(arg0: boolean): void
public "toNBT"(arg0: $CompoundTag$$Type): void
public "setValueString"(arg0: StringJS): void
get "keyTranslation"(): StringJS
get "valueTranslation"(): StringJS
get "descTranslation"(): StringJS
get "enabled"(): boolean
get "key"(): StringJS
get "valueString"(): StringJS
set "enabled"(value: boolean)
set "valueString"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionEnum$$Type<E> = ($OptionEnum<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionEnum$$Original<E> = $OptionEnum<(E)>;}
declare module "com.nigthbeam.reconstructedwands.basics.option.WandUpgradesSelectable" {
import {$IOption$$Interface} from "com.nigthbeam.reconstructedwands.basics.option.IOption"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$WandUpgrades} from "com.nigthbeam.reconstructedwands.basics.option.WandUpgrades"
import {$IWandUpgrade, $IWandUpgrade$$Type} from "com.nigthbeam.reconstructedwands.api.IWandUpgrade"

export class $WandUpgradesSelectable<T extends $IWandUpgrade> extends $WandUpgrades<(T)> implements $IOption$$Interface<(T)> {
constructor(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: T)

public "getKeyTranslation"(): StringJS
public "getValueTranslation"(): StringJS
public "getDescTranslation"(): StringJS
public "fromNBT"(arg0: $CompoundTag$$Type): void
public "get"(): any
public "next"(arg0: boolean): void
public "next"(): void
public "isEnabled"(): boolean
public "getKey"(): StringJS
public "set"(arg0: any): void
public "set"(arg0: T): void
public "getValueString"(): StringJS
public "toNBT"(arg0: $CompoundTag$$Type): void
public "setValueString"(arg0: StringJS): void
get "keyTranslation"(): StringJS
get "valueTranslation"(): StringJS
get "descTranslation"(): StringJS
get "enabled"(): boolean
get "key"(): StringJS
get "valueString"(): StringJS
set "valueString"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandUpgradesSelectable$$Type<T> = ($WandUpgradesSelectable<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandUpgradesSelectable$$Original<T> = $WandUpgradesSelectable<(T)>;}
declare module "com.nigthbeam.reconstructedwands.basics.option.WandOptions$DIRECTION" {
import {$Enum} from "java.lang.Enum"

export class $WandOptions$DIRECTION extends $Enum<($WandOptions$DIRECTION)> {
static readonly "TARGET": $WandOptions$DIRECTION
static readonly "PLAYER": $WandOptions$DIRECTION

public static "values"(): ($WandOptions$DIRECTION)[]
public static "valueOf"(arg0: StringJS): $WandOptions$DIRECTION
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$DIRECTION$$Type = (("target") | ("player"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandOptions$DIRECTION$$Original = $WandOptions$DIRECTION;}
declare module "com.nigthbeam.reconstructedwands.basics.option.WandOptions$LOCK" {
import {$Enum} from "java.lang.Enum"

export class $WandOptions$LOCK extends $Enum<($WandOptions$LOCK)> {
static readonly "VERTICAL": $WandOptions$LOCK
static readonly "NORTHSOUTH": $WandOptions$LOCK
static readonly "NOLOCK": $WandOptions$LOCK
static readonly "HORIZONTAL": $WandOptions$LOCK
static readonly "EASTWEST": $WandOptions$LOCK

public static "values"(): ($WandOptions$LOCK)[]
public static "valueOf"(arg0: StringJS): $WandOptions$LOCK
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOptions$LOCK$$Type = (("horizontal") | ("vertical") | ("northsouth") | ("eastwest") | ("nolock"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandOptions$LOCK$$Original = $WandOptions$LOCK;}
declare module "com.nigthbeam.reconstructedwands.basics.option.OptionBoolean" {
import {$IOption$$Interface} from "com.nigthbeam.reconstructedwands.basics.option.IOption"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $OptionBoolean implements $IOption$$Interface<(boolean)> {
constructor(arg0: StringJS, arg1: boolean)

public "getKeyTranslation"(): StringJS
public "getValueTranslation"(): StringJS
public "getDescTranslation"(): StringJS
public "fromNBT"(arg0: $CompoundTag$$Type): void
public "get"(): any
public "next"(): void
public "next"(arg0: boolean): void
public "isEnabled"(): boolean
public "getKey"(): StringJS
public "set"(arg0: any): void
public "set"(arg0: boolean): void
public "getValueString"(): StringJS
public "setEnabled"(arg0: boolean): void
public "toNBT"(arg0: $CompoundTag$$Type): void
public "setValueString"(arg0: StringJS): void
get "keyTranslation"(): StringJS
get "valueTranslation"(): StringJS
get "descTranslation"(): StringJS
get "enabled"(): boolean
get "key"(): StringJS
get "valueString"(): StringJS
set "enabled"(value: boolean)
set "valueString"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionBoolean$$Type = ($OptionBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionBoolean$$Original = $OptionBoolean;}
