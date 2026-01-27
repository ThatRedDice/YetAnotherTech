declare module "xfacthd.framedblocks.common.item.VerticalAndWallBlockItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $VerticalAndWallBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "removeFromBlockToItemMap"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalAndWallBlockItem$$Type = ($VerticalAndWallBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalAndWallBlockItem$$Original = $VerticalAndWallBlockItem;}
declare module "xfacthd.framedblocks.common.item.FramedToolItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$FramedToolType, $FramedToolType$$Type} from "xfacthd.framedblocks.common.data.FramedToolType"

export class $FramedToolItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $FramedToolType$$Type, arg1: $Item$Properties$$Type)
constructor(arg0: $FramedToolType$$Type)

public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "getType"(): $FramedToolType
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $FramedToolType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedToolItem$$Type = ($FramedToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedToolItem$$Original = $FramedToolItem;}
declare module "xfacthd.framedblocks.common.item.PhantomPasteItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $PhantomPasteItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "FEATURE_DISABLED": $Component
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomPasteItem$$Type = ($PhantomPasteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PhantomPasteItem$$Original = $PhantomPasteItem;}
declare module "xfacthd.framedblocks.common.item.FramedHangingSignItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$FramedSignItem} from "xfacthd.framedblocks.common.item.FramedSignItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $FramedHangingSignItem extends $FramedSignItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedHangingSignItem$$Type = ($FramedHangingSignItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedHangingSignItem$$Original = $FramedHangingSignItem;}
declare module "xfacthd.framedblocks.common.item.FramedBlueprintItem" {
import {$FramedToolItem} from "xfacthd.framedblocks.common.item.FramedToolItem"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlueprintCopyBehaviour} from "xfacthd.framedblocks.api.blueprint.BlueprintCopyBehaviour"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CamoList} from "xfacthd.framedblocks.api.util.CamoList"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlueprintData$$Type} from "xfacthd.framedblocks.api.blueprint.BlueprintData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FramedToolType$$Type} from "xfacthd.framedblocks.common.data.FramedToolType"

export class $FramedBlueprintItem extends $FramedToolItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static readonly "IS_INTANGIBLE": StringJS
static readonly "TRUE": $MutableComponent
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "CONTAINED_BLOCK": StringJS
static readonly "MISSING_MATERIALS": StringJS
static readonly "BLOCK_INVALID": $MutableComponent
static readonly "CAMO_BLOCK": StringJS
static readonly "CANT_PLACE_FLUID_CAMO": $Component
static readonly "BLOCK_NONE": $MutableComponent
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "IS_ILLUMINATED": StringJS
static readonly "FALSE": $MutableComponent
static readonly "IS_REINFORCED": StringJS
static readonly "CANT_COPY": $MutableComponent
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $FramedToolType$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "getBehaviour"(arg0: $Block$$Type): $BlueprintCopyBehaviour
public static "getCamoContainers"(arg0: $BlueprintData$$Type): $CamoList
public static "init"(): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedBlueprintItem$$Type = ($FramedBlueprintItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedBlueprintItem$$Original = $FramedBlueprintItem;}
declare module "xfacthd.framedblocks.common.item.FramedSignItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $FramedSignItem extends $StandingAndWallBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedSignItem$$Type = ($FramedSignItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedSignItem$$Original = $FramedSignItem;}
