declare module "pro.mikey.justhammers.HammerItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$BoundingBox} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HammerItem extends $PickaxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: integer, arg2: integer, arg3: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getRadius"(): integer
public "findAndBreakNearBlocks"(arg0: $BlockHitResult$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type): void
public static "getAreaOfEffect"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: integer, arg3: integer): $BoundingBox
public "causeAoe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemStack$$Type, arg4: $LivingEntity$$Type): void
public "getDepth"(): integer
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "radius"(): integer
get "depth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerItem$$Type = ($HammerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HammerItem$$Original = $HammerItem;}
