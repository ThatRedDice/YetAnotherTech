declare module "com.hlysine.create_connected.mixin.sequencedgearshift.InstructionAccessor" {
import {$SequencerInstructions, $SequencerInstructions$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencerInstructions"

export interface $InstructionAccessor$$Interface {

(): $SequencerInstructions$$Type
get "instruction"(): $SequencerInstructions
}

export class $InstructionAccessor implements $InstructionAccessor$$Interface {
 "getInstruction"(): $SequencerInstructions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstructionAccessor$$Type = (() => $SequencerInstructions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstructionAccessor$$Original = $InstructionAccessor;}
declare module "com.hlysine.create_connected.mixin.copycat.fencegate.FenceGateBlockAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FenceGateBlockAccessor$$Interface {

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $BlockHitResult): $InteractionResult$$Type
}

export class $FenceGateBlockAccessor implements $FenceGateBlockAccessor$$Interface {
 "callUseWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceGateBlockAccessor$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $BlockHitResult) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FenceGateBlockAccessor$$Original = $FenceGateBlockAccessor;}
declare module "com.hlysine.create_connected.mixin.sequencedgearshift.InstructionSpeedModifiersAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InstructionSpeedModifiersAccessor$$Interface {

(): integer
get "value"(): integer
}

export class $InstructionSpeedModifiersAccessor implements $InstructionSpeedModifiersAccessor$$Interface {
 "getValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstructionSpeedModifiersAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstructionSpeedModifiersAccessor$$Original = $InstructionSpeedModifiersAccessor;}
declare module "com.hlysine.create_connected.mixin.linkedtransmitter.AnalogLeverBlockEntityAccessor" {
import {$LerpedFloat} from "net.createmod.catnip.animation.LerpedFloat"

export interface $AnalogLeverBlockEntityAccessor$$Interface {
get "lastChange"(): integer
get "clientState"(): $LerpedFloat
}

export class $AnalogLeverBlockEntityAccessor implements $AnalogLeverBlockEntityAccessor$$Interface {
 "getLastChange"(): integer
 "getClientState"(): $LerpedFloat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnalogLeverBlockEntityAccessor$$Type = ($AnalogLeverBlockEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnalogLeverBlockEntityAccessor$$Original = $AnalogLeverBlockEntityAccessor;}
