declare module "dev.architectury.core.item.ArchitecturyBucketItem" {
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ArchitecturyBucketItem extends $BucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(fluid: $Supplier$$Type<($Fluid$$Type)>, properties: $Item$Properties$$Type)

public "getContainedFluid"(): $Fluid
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "containedFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyBucketItem$$Type = ($ArchitecturyBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchitecturyBucketItem$$Original = $ArchitecturyBucketItem;}
