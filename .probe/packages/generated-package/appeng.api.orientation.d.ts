declare module "appeng.api.orientation.RelativeSide" {
import {$Enum} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $RelativeSide extends $Enum<($RelativeSide)> {
static readonly "TOP": $RelativeSide
static readonly "LEFT": $RelativeSide
static readonly "FRONT": $RelativeSide
static readonly "BACK": $RelativeSide
static readonly "RIGHT": $RelativeSide
static readonly "BOTTOM": $RelativeSide

public static "fromUnrotatedSide"(arg0: $Direction$$Type): $RelativeSide
public "getUnrotatedSide"(): $Direction
public static "values"(): ($RelativeSide)[]
public static "valueOf"(arg0: StringJS): $RelativeSide
get "unrotatedSide"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeSide$$Type = (("front") | ("back") | ("top") | ("bottom") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelativeSide$$Original = $RelativeSide;}
declare module "appeng.api.orientation.IOrientableBlock" {
import {$BlockOrientation} from "appeng.api.orientation.BlockOrientation"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IOrientableBlock$$Interface {

(): $IOrientationStrategy$$Type
get "orientationStrategy"(): $IOrientationStrategy
}

export class $IOrientableBlock implements $IOrientableBlock$$Interface {
 "getOrientation"(arg0: $BlockState$$Type): $BlockOrientation
 "getOrientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientableBlock$$Type = (() => $IOrientationStrategy$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOrientableBlock$$Original = $IOrientableBlock;}
declare module "appeng.api.orientation.IOrientationStrategy" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$Stream} from "java.util.stream.Stream"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IOrientationStrategy$$Interface {

(): $Collection$$Type<($Property$$Type<(never)>)>
get "properties"(): $Collection<($Property<(never)>)>
}

export class $IOrientationStrategy implements $IOrientationStrategy$$Interface {
static readonly "SPIN": $IntegerProperty

 "setFacing"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "getAllStates"(arg0: $BlockState$$Type): $Stream<($BlockState)>
 "getStateForPlacement"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
 "getSpin"(arg0: $BlockState$$Type): integer
 "setOrientation"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: integer): $BlockState
 "setOrientation"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): $BlockState
 "getFacing"(arg0: $BlockState$$Type): $Direction
 "allowsPlayerRotation"(): boolean
 "setSpin"(arg0: $BlockState$$Type, arg1: integer): $BlockState
 "setUp"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
static "get"(arg0: $BlockState$$Type): $IOrientationStrategy
 "getProperties"(): $Collection<($Property<(never)>)>
 "getSide"(arg0: $BlockState$$Type, arg1: $RelativeSide$$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientationStrategy$$Type = (() => $Collection$$Type<($Property$$Type<(never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOrientationStrategy$$Original = $IOrientationStrategy;}
declare module "appeng.api.orientation.BlockOrientation" {
import {$Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Enum} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RelativeSide, $RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Transformation} from "com.mojang.math.Transformation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockOrientation extends $Enum<($BlockOrientation)> {
static readonly "UP_SOUTH": $BlockOrientation
static readonly "EAST_SOUTH": $BlockOrientation
static readonly "SOUTH_DOWN": $BlockOrientation
static readonly "UP_NORTH": $BlockOrientation
static readonly "NORTH_UP": $BlockOrientation
static readonly "NORTH_WEST": $BlockOrientation
static readonly "EAST_NORTH": $BlockOrientation
static readonly "DOWN_EAST": $BlockOrientation
static readonly "DOWN_WEST": $BlockOrientation
static readonly "UP_WEST": $BlockOrientation
static readonly "DOWN_SOUTH": $BlockOrientation
static readonly "EAST_UP": $BlockOrientation
static readonly "DOWN_NORTH": $BlockOrientation
static readonly "UP_EAST": $BlockOrientation
static readonly "EAST_DOWN": $BlockOrientation
static readonly "WEST_NORTH": $BlockOrientation
static readonly "NORTH_EAST": $BlockOrientation
static readonly "SOUTH_UP": $BlockOrientation
static readonly "SOUTH_EAST": $BlockOrientation
static readonly "WEST_SOUTH": $BlockOrientation
static readonly "WEST_DOWN": $BlockOrientation
static readonly "SOUTH_WEST": $BlockOrientation
static readonly "NORTH_DOWN": $BlockOrientation
static readonly "WEST_UP": $BlockOrientation

public "getSpin"(): integer
public "getTransformation"(): $Transformation
public "getQuaternion"(): $Quaternionf
public "rotateClockwiseAround"(arg0: $Direction$Axis$$Type, arg1: $Direction$AxisDirection$$Type): $BlockOrientation
public "rotateClockwiseAround"(arg0: $Direction$$Type): $BlockOrientation
public "getAngleY"(): integer
public "getAngleZ"(): integer
public "getAngleX"(): integer
public "isRedundant"(): boolean
public "setOn"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "setOn"(arg0: $BlockEntity$$Type): void
public "resultingRotate"(arg0: $Direction$$Type): $Direction
public "getRelativeSide"(arg0: $Direction$$Type): $RelativeSide
public "getRelativeSides"(arg0: $Set$$Type<($Direction$$Type)>): $Set<($RelativeSide)>
public static "get"(arg0: $IOrientationStrategy$$Type, arg1: $BlockState$$Type): $BlockOrientation
public static "get"(arg0: $BlockState$$Type): $BlockOrientation
public static "get"(arg0: $Direction$$Type): $BlockOrientation
public static "get"(arg0: $Direction$$Type, arg1: $Direction$$Type): $BlockOrientation
public static "get"(arg0: $Direction$$Type, arg1: integer): $BlockOrientation
public static "get"(arg0: $BlockEntity$$Type): $BlockOrientation
public static "values"(): ($BlockOrientation)[]
public static "valueOf"(arg0: StringJS): $BlockOrientation
public "rotate"(arg0: $Direction$$Type): $Direction
public "getSide"(arg0: $RelativeSide$$Type): $Direction
public "getSides"(arg0: $Set$$Type<($RelativeSide$$Type)>): $Set<($Direction)>
get "spin"(): integer
get "transformation"(): $Transformation
get "quaternion"(): $Quaternionf
get "angleY"(): integer
get "angleZ"(): integer
get "angleX"(): integer
get "redundant"(): boolean
set "on"(value: $BlockEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockOrientation$$Type = (("down_north") | ("down_west") | ("down_south") | ("down_east") | ("up_north") | ("up_east") | ("up_south") | ("up_west") | ("north_up") | ("north_west") | ("north_down") | ("north_east") | ("south_up") | ("south_east") | ("south_down") | ("south_west") | ("west_up") | ("west_south") | ("west_down") | ("west_north") | ("east_up") | ("east_north") | ("east_down") | ("east_south"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockOrientation$$Original = $BlockOrientation;}
