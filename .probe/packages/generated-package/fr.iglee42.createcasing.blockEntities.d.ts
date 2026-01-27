declare module "fr.iglee42.createcasing.blockEntities.CreativeCogwheelBlockEntity" {
import {$GeneratingKineticBlockEntity} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List, $List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IRotate$$Type} from "com.simibubi.create.content.kinetics.base.IRotate"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeCogwheelBlockEntity extends $GeneratingKineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
static readonly "MAX_SPEED": integer
static readonly "DEFAULT_SPEED": integer
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getGeneratedSpeed"(): float
public "addPropagationLocations"(arg0: $IRotate$$Type, arg1: $BlockState$$Type, arg2: $List$$Type<($BlockPos$$Type)>): $List<($BlockPos)>
public "initialize"(): void
get "generatedSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCogwheelBlockEntity$$Type = ($CreativeCogwheelBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCogwheelBlockEntity$$Original = $CreativeCogwheelBlockEntity;}
