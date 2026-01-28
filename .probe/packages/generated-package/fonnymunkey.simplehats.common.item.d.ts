declare module "fonnymunkey.simplehats.common.item.HatItemDyeable" {
import {$HatEntry$$Type} from "fonnymunkey.simplehats.util.HatEntry"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HatItem} from "fonnymunkey.simplehats.common.item.HatItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Side$$Type} from "io.wispforest.accessories.api.client.Side"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $HatItemDyeable extends $HatItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $HatEntry$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getColor"(arg0: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
public static "followBodyRotations"(entity: $LivingEntity$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>): void
/**
 * 
 * @deprecated
 */
public static "translateToFace"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, entity: $LivingEntity$$Type): void
public static "transformToFace"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, side: $Side$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToChest"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, livingEntity: $LivingEntity$$Type): void
public static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type): void
public static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, xPercent: number, yPercent: number, zPercent: number): void
/**
 * 
 * @deprecated
 */
public static "translateToRightArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToLeftArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToRightLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToLeftLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatItemDyeable$$Type = ($HatItemDyeable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatItemDyeable$$Original = $HatItemDyeable;}
declare module "fonnymunkey.simplehats.common.item.HatDisplayItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $HatDisplayItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatDisplayItem$$Type = ($HatDisplayItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatDisplayItem$$Original = $HatDisplayItem;}
declare module "fonnymunkey.simplehats.common.item.HatItem" {
import {$HatEntry, $HatEntry$$Type} from "fonnymunkey.simplehats.util.HatEntry"
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Side$$Type} from "io.wispforest.accessories.api.client.Side"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$AccessoryRenderer$$Interface} from "io.wispforest.accessories.api.client.AccessoryRenderer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Item} from "net.minecraft.world.item.Item"
import {$EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$AccessoryItem} from "io.wispforest.accessories.api.AccessoryItem"

export class $HatItem extends $AccessoryItem implements $AccessoryRenderer$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $HatEntry$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDropRule"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $DamageSource$$Type): $DropRule
public "canEquipFromUse"(arg0: $ItemStack$$Type): boolean
public "getHatEntry"(): $HatEntry
public "render"<M extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $PoseStack$$Type, arg3: $EntityModel$$Type<(M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "shouldRenderInFirstPerson"(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
public "renderOnFirstPerson"<M extends $LivingEntity>(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type, matrices: $PoseStack$$Type, model: $EntityModel$$Type<(M)>, multiBufferSource: $MultiBufferSource$$Type, light: integer): void
/**
 * 
 * @deprecated
 */
public static "followBodyRotations"(entity: $LivingEntity$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>): void
/**
 * 
 * @deprecated
 */
public static "translateToFace"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, entity: $LivingEntity$$Type): void
public static "transformToFace"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, side: $Side$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToChest"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, livingEntity: $LivingEntity$$Type): void
public static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type): void
public static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, xPercent: number, yPercent: number, zPercent: number): void
/**
 * 
 * @deprecated
 */
public static "translateToRightArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToLeftArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToRightLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
public static "translateToLeftLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
public "isEmpty"(): boolean
public "shouldRender"(isRendering: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "hatEntry"(): $HatEntry
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatItem$$Type = ($HatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatItem$$Original = $HatItem;}
declare module "fonnymunkey.simplehats.common.item.BagItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$HatEntry$HatSeason$$Type} from "fonnymunkey.simplehats.util.HatEntry$HatSeason"

export class $BagItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Rarity$$Type)
constructor(arg0: $HatEntry$HatSeason$$Type)

public static "getUnwrapFinishSound"(): $SoundEvent
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "unwrapFinishSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BagItem$$Type = ($BagItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BagItem$$Original = $BagItem;}
