declare module "com.mrh0.createaddition.index.CAFluids$NoColorFluidAttributes" {
import {$AllFluids$TintedFluidType} from "com.simibubi.create.AllFluids$TintedFluidType"
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"

export class $CAFluids$NoColorFluidAttributes extends $AllFluids$TintedFluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAFluids$NoColorFluidAttributes$$Type = ($CAFluids$NoColorFluidAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CAFluids$NoColorFluidAttributes$$Original = $CAFluids$NoColorFluidAttributes;}
declare module "com.mrh0.createaddition.index.CAArmInteractions$LiquidBlazeBurnerType" {
import {$ArmInteractionPointType} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPointType"
import {$ArmInteractionPoint} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPoint"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CAArmInteractions$LiquidBlazeBurnerType extends $ArmInteractionPointType {
static readonly "SORTED_TYPES_VIEW": $List<($ArmInteractionPointType)>

constructor()

public "canCreatePoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "createPoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ArmInteractionPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAArmInteractions$LiquidBlazeBurnerType$$Type = ($CAArmInteractions$LiquidBlazeBurnerType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CAArmInteractions$LiquidBlazeBurnerType$$Original = $CAArmInteractions$LiquidBlazeBurnerType;}
