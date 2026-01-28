declare module "mcjty.lib.varia.LogicFacing" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LogicFacing extends $Enum<($LogicFacing)> implements $StringRepresentable$$Interface {
static readonly "DOWN_TONORTH": $LogicFacing
static readonly "EAST_TODOWN": $LogicFacing
static readonly "DOWN_TOSOUTH": $LogicFacing
static readonly "EAST_TOSOUTH": $LogicFacing
static readonly "UP_TOSOUTH": $LogicFacing
static readonly "UP_TOEAST": $LogicFacing
static readonly "NORTH_TOWEST": $LogicFacing
static readonly "UP_TOWEST": $LogicFacing
static readonly "NORTH_TOEAST": $LogicFacing
static readonly "SOUTH_TOEAST": $LogicFacing
static readonly "SOUTH_TOUP": $LogicFacing
static readonly "NORTH_TOUP": $LogicFacing
static readonly "EAST_TONORTH": $LogicFacing
static readonly "VALUES": ($LogicFacing)[]
static readonly "WEST_TONORTH": $LogicFacing
static readonly "SOUTH_TOWEST": $LogicFacing
static readonly "DIRECTIONS": ($Direction)[]
static readonly "EAST_TOUP": $LogicFacing
static readonly "DOWN_TOWEST": $LogicFacing
static readonly "WEST_TOSOUTH": $LogicFacing
static readonly "DOWN_TOEAST": $LogicFacing
static readonly "NORTH_TODOWN": $LogicFacing
static readonly "WEST_TOUP": $LogicFacing
static readonly "SOUTH_TODOWN": $LogicFacing
static readonly "UP_TONORTH": $LogicFacing
static readonly "WEST_TODOWN": $LogicFacing

public "getInputSide"(): $Direction
public "getRotationStep"(): integer
public "toString"(): StringJS
public static "values"(): ($LogicFacing)[]
public static "valueOf"(arg0: StringJS): $LogicFacing
public static "rotate"(arg0: $LogicFacing$$Type): $LogicFacing
public "getSide"(): $Direction
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "inputSide"(): $Direction
get "rotationStep"(): integer
get "side"(): $Direction
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicFacing$$Type = (("down_tonorth") | ("down_tosouth") | ("down_towest") | ("down_toeast") | ("up_tonorth") | ("up_tosouth") | ("up_towest") | ("up_toeast") | ("north_towest") | ("north_toeast") | ("north_toup") | ("north_todown") | ("south_towest") | ("south_toeast") | ("south_toup") | ("south_todown") | ("west_tonorth") | ("west_tosouth") | ("west_toup") | ("west_todown") | ("east_tonorth") | ("east_tosouth") | ("east_toup") | ("east_todown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicFacing$$Original = $LogicFacing;}
declare module "mcjty.lib.varia.IEnergyItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IEnergyItem$$Interface {
}

export class $IEnergyItem implements $IEnergyItem$$Interface {
 "extractEnergy"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
 "receiveEnergy"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
 "getMaxEnergyStoredL"(arg0: $ItemStack$$Type): long
 "receiveEnergyL"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
 "extractEnergyL"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
 "getEnergyStoredL"(arg0: $ItemStack$$Type): long
 "getEnergyStored"(arg0: $ItemStack$$Type): integer
 "getMaxEnergyStored"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyItem$$Type = ($IEnergyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyItem$$Original = $IEnergyItem;}
declare module "mcjty.lib.varia.ItemStackList" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List, $List$$Type} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $ItemStackList extends $NonNullList<($ItemStack)> {
static readonly "EMPTY": $ItemStackList

constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $ItemStack$$Type)

public static "create"(): $ItemStackList
public static "create"(arg0: integer): $ItemStackList
public "remove"(arg0: any): boolean
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackList$$Type = ($ItemStackList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackList$$Original = $ItemStackList;}
