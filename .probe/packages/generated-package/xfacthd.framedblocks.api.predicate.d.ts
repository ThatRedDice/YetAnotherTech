declare module "xfacthd.framedblocks.api.predicate.fullface.FullFacePredicate" {
import {$BiPredicate, $BiPredicate$$Type, $BiPredicate$$Interface} from "java.util.function.BiPredicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FullFacePredicate$$Interface extends $BiPredicate$$Interface<($BlockState), ($Direction)> {

(arg0: $BlockState, arg1: $Direction): boolean
}

export class $FullFacePredicate implements $FullFacePredicate$$Interface {
static readonly "NOT_DIR": $FullFacePredicate
static readonly "DOWN": $FullFacePredicate
static readonly "HOR_DIR": $FullFacePredicate
static readonly "HOR_DIR_OPPOSITE": $FullFacePredicate
static readonly "TRUE": $FullFacePredicate
static readonly "DIR": $FullFacePredicate
static readonly "DIR_AXIS": $FullFacePredicate
static readonly "TOP": $FullFacePredicate
static readonly "HOR_DIR_AXIS": $FullFacePredicate
static readonly "NOT_AXIS": $FullFacePredicate
static readonly "NOT_HOR_DIR": $FullFacePredicate
static readonly "FALSE": $FullFacePredicate
static readonly "DIR_OPPOSITE": $FullFacePredicate
static readonly "Y_AXIS": $FullFacePredicate
static readonly "AXIS": $FullFacePredicate

 "and"(arg0: $BiPredicate$$Type<($BlockState), ($Direction)>): $FullFacePredicate
 "test"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
 "test"(arg0: any, arg1: any): boolean
 "or"(arg0: $BiPredicate$$Type<($BlockState), ($Direction)>): $FullFacePredicate
 "negate"(): $BiPredicate<($BlockState), ($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FullFacePredicate$$Type = ((arg0: $BlockState, arg1: $Direction) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FullFacePredicate$$Original = $FullFacePredicate;}
declare module "xfacthd.framedblocks.api.predicate.contex.ConTexMode" {
import {$Enum} from "java.lang.Enum"

export class $ConTexMode extends $Enum<($ConTexMode)> {
static readonly "FULL_FACE": $ConTexMode
static readonly "FULL_EDGE": $ConTexMode
static readonly "DETAILED": $ConTexMode
static readonly "NONE": $ConTexMode

public "atleast"(arg0: $ConTexMode$$Type): boolean
public static "values"(): ($ConTexMode)[]
public static "valueOf"(arg0: StringJS): $ConTexMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConTexMode$$Type = (("none") | ("full_face") | ("full_edge") | ("detailed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConTexMode$$Original = $ConTexMode;}
declare module "xfacthd.framedblocks.api.predicate.cull.SideSkipPredicate" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SideSkipPredicate$$Interface {

(arg0: $BlockGetter, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockState, arg4: $Direction): boolean
}

export class $SideSkipPredicate implements $SideSkipPredicate$$Interface {
static readonly "FALSE": $SideSkipPredicate

 "test"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideSkipPredicate$$Type = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockState, arg4: $Direction) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SideSkipPredicate$$Original = $SideSkipPredicate;}
declare module "xfacthd.framedblocks.api.predicate.contex.ConnectionPredicate" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ConnectionPredicate$$Interface {
}

export class $ConnectionPredicate implements $ConnectionPredicate$$Interface {
static readonly "FULL_EDGE": $ConnectionPredicate
static readonly "FULL_FACE": $ConnectionPredicate
static readonly "FALSE": $ConnectionPredicate

 "canConnectFullEdge"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): boolean
 "canConnectDetailed"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionPredicate$$Type = ($ConnectionPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionPredicate$$Original = $ConnectionPredicate;}
