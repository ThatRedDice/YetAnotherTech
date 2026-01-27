declare module "io.wispforest.accessories.api.Accessory" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEventData} from "io.wispforest.accessories.api.SoundEventData"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$AccessoryItemAttributeModifiers$Builder$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export interface $Accessory$$Interface {
}

export class $Accessory implements $Accessory$$Interface {
 "canEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "onBreak"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "getDropRule"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, source: $DamageSource$$Type): $DropRule
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "onEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "canUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "onEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
/**
 * 
 * @deprecated
 */
 "canEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "canEquipFromUse"(stack: $ItemStack$$Type): boolean
 "getDynamicModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "getStaticModifiers"(item: $Item$$Type, builder: $AccessoryItemAttributeModifiers$Builder$$Type): void
/**
 * 
 * @deprecated
 */
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
 "tick"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "maxStackSize"(stack: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "getModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "getEquipSound"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): $SoundEventData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessory$$Type = ($Accessory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Accessory$$Original = $Accessory;}
declare module "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AttributeModificationData} from "io.wispforest.accessories.api.attributes.AttributeModificationData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryAttributeBuilder {
constructor(slotName: StringJS, slot: integer)
constructor()
constructor(slotReference: $SlotReference$$Type, parentBuilder: $AccessoryAttributeBuilder$$Type)
constructor(slotReference: $SlotReference$$Type)

public "addFrom"(builder: $AccessoryAttributeBuilder$$Type): $AccessoryAttributeBuilder
public "getSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(slotname: StringJS, slot: integer): StringJS
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(ref: $SlotReference$$Type): StringJS
public "addStackable"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type): $AccessoryAttributeBuilder
public "addStackable"(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type): $AccessoryAttributeBuilder
public "addExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type): $AccessoryAttributeBuilder
public "addExclusive"(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type): $AccessoryAttributeBuilder
public "getExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModificationData
public "exclusiveAttributes"(): $Map<($Holder<($Attribute)>), ($Map<($ResourceLocation), ($AttributeModificationData)>)>
public "stackedAttributes"(): $Multimap<($Holder<($Attribute)>), ($AttributeModificationData)>
public "removeExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModificationData
public "removeStacks"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $Collection<($AttributeModificationData)>
public "getStacks"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $Collection<($AttributeModificationData)>
public "equals"(obj: any): boolean
public "isEmpty"(): boolean
public "getAttributeModifiers"(filterSlots: boolean): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "slotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryAttributeBuilder$$Type = ($AccessoryAttributeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryAttributeBuilder$$Original = $AccessoryAttributeBuilder;}
declare module "io.wispforest.accessories.api.client.AccessoryRenderer" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Side$$Type} from "io.wispforest.accessories.api.client.Side"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoryRenderer$$Interface {

(arg0: $ItemStack, arg1: $SlotReference, arg2: $PoseStack, arg3: $EntityModel<(M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
get "empty"(): boolean
}

export class $AccessoryRenderer implements $AccessoryRenderer$$Interface {
 "shouldRenderInFirstPerson"(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "renderOnFirstPerson"<M extends $LivingEntity>(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type, matrices: $PoseStack$$Type, model: $EntityModel$$Type<(M)>, multiBufferSource: $MultiBufferSource$$Type, light: integer): void
/**
 * 
 * @deprecated
 */
static "followBodyRotations"(entity: $LivingEntity$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>): void
/**
 * 
 * @deprecated
 */
static "translateToFace"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, entity: $LivingEntity$$Type): void
static "transformToFace"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, side: $Side$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToChest"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, livingEntity: $LivingEntity$$Type): void
static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type): void
static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, xPercent: number, yPercent: number, zPercent: number): void
/**
 * 
 * @deprecated
 */
static "translateToRightArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToLeftArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToRightLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToLeftLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
 "isEmpty"(): boolean
 "render"<M extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $PoseStack$$Type, arg3: $EntityModel$$Type<(M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
 "shouldRender"(isRendering: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryRenderer$$Type = ((arg0: $ItemStack, arg1: $SlotReference, arg2: $PoseStack, arg3: $EntityModel<(M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryRenderer$$Original = $AccessoryRenderer;}
declare module "io.wispforest.accessories.api.slot.SlotReference" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$SlotType} from "io.wispforest.accessories.api.slot.SlotType"
import {$AccessoriesCapability} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$AccessoriesContainer} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $SlotReference$$Interface {
get "valid"(): boolean
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
}

export class $SlotReference implements $SlotReference$$Interface {
 "slotName"(): StringJS
 "createSlotPath"(): StringJS
 "slotContainer"(): $AccessoriesContainer
 "entity"(): $LivingEntity
 "isValid"(): boolean
 "slot"(): integer
 "type"(): $SlotType
static "of"(livingEntity: $LivingEntity$$Type, slotName: StringJS, slot: integer): $SlotReference
 "getStack"(): $ItemStack
 "setStack"(stack: $ItemStack$$Type): boolean
static "ofNest"(livingEntity: $LivingEntity$$Type, slotName: StringJS, initialHolderSlot: integer, innerSlotIndices: $List$$Type<(integer)>): $SlotReference
 "capability"(): $AccessoriesCapability
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$$Type = ($SlotReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotReference$$Original = $SlotReference;}
declare module "io.wispforest.accessories.api.EquipmentChecking" {
import {$Enum} from "java.lang.Enum"

export class $EquipmentChecking extends $Enum<($EquipmentChecking)> {
static readonly "ACCESSORIES_ONLY": $EquipmentChecking
static readonly "COSMETICALLY_OVERRIDABLE": $EquipmentChecking

public static "values"(): ($EquipmentChecking)[]
public static "valueOf"(name: StringJS): $EquipmentChecking
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentChecking$$Type = (("accessories_only") | ("cosmetically_overridable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentChecking$$Original = $EquipmentChecking;}
declare module "io.wispforest.accessories.api.slot.SlotType" {
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Set} from "java.util.Set"

export interface $SlotType$$Interface extends $Comparable$$Interface<($SlotType)> {
}

export class $SlotType implements $SlotType$$Interface {
static readonly "EMPTY_SLOT_ICON": $ResourceLocation

 "dropRule"(): $DropRule
 "amount"(): integer
 "name"(): StringJS
 "compareTo"(o: $SlotType$$Type): integer
 "compareTo"(arg0: any): integer
 "validators"(): $Set<($ResourceLocation)>
 "order"(): integer
 "icon"(): $ResourceLocation
 "translation"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$$Type = ($SlotType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotType$$Original = $SlotType;}
declare module "io.wispforest.accessories.api.EquipCheck" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $EquipCheck$$Interface {

(arg0: $ItemStack, arg1: boolean): boolean
}

export class $EquipCheck implements $EquipCheck$$Interface {
 "isValid"(arg0: $ItemStack$$Type, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCheck$$Type = ((arg0: $ItemStack, arg1: boolean) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipCheck$$Original = $EquipCheck;}
declare module "io.wispforest.accessories.api.SoundEventData" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $SoundEventData extends $Record {
constructor(event: $Holder$$Type<($SoundEvent)>, volume: float, pitch: float)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "event"(): $Holder<($SoundEvent)>
public "volume"(): float
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventData$$Type = ({"volume"?: float, "event"?: $Holder$$Type<($SoundEvent)>, "pitch"?: float}) | ([volume?: float, event?: $Holder$$Type<($SoundEvent)>, pitch?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEventData$$Original = $SoundEventData;}
declare module "io.wispforest.accessories.api.slot.SlotEntryReference" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record} from "java.lang.Record"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $SlotEntryReference extends $Record {
constructor(reference: $SlotReference$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reference"(): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotEntryReference$$Type = ({"reference"?: $SlotReference$$Type, "stack"?: $ItemStack$$Type}) | ([reference?: $SlotReference$$Type, stack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotEntryReference$$Original = $SlotEntryReference;}
declare module "io.wispforest.accessories.api.AccessoriesCapability" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair} from "it.unimi.dsi.fastutil.Pair"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$AccessoriesContainer} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SlotTypeReference$$Type} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$EquipAction} from "io.wispforest.accessories.api.EquipAction"
import {$AccessoriesHolder} from "io.wispforest.accessories.api.AccessoriesHolder"
import {$TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$EquipCheck$$Type} from "io.wispforest.accessories.api.EquipCheck"
import {$SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Accessory$$Type} from "io.wispforest.accessories.api.Accessory"
import {$SlotEntryReference} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export interface $AccessoriesCapability$$Interface {
get "containers"(): $Map<(StringJS), ($AccessoriesContainer)>
get "allEquipped"(): $List<($SlotEntryReference)>
get "slotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "holder"(): $AccessoriesHolder
}

export class $AccessoriesCapability implements $AccessoriesCapability$$Interface {
static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesCapability)>
 "getContainers"(): $Map<(StringJS), ($AccessoriesContainer)>
 "updateContainers"(): void
 "attemptToEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($Optional<($ItemStack)>)>
 "attemptToEquipAccessory"(stack: $ItemStack$$Type): $SlotReference
 "canEquipAccessory"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $EquipCheck$$Type): $Pair<($SlotReference), ($EquipAction)>
 "canEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($EquipAction)>
 "isEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(item: $Item$$Type): boolean
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(predicate: $ItemStackBasedPredicate$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): boolean
 "getFirstEquipped"(item: $Item$$Type): $SlotEntryReference
 "getFirstEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(arg0: $ItemStackBasedPredicate$$Type, arg1: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $SlotEntryReference
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $ItemStackBasedPredicate$$Type): boolean
 "getEquipped"(predicate: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
 "getEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $List<($SlotEntryReference)>
 "getEquipped"(item: $Item$$Type): $List<($SlotEntryReference)>
 "getAllEquipped"(): $List<($SlotEntryReference)>
 "getAllEquipped"(arg0: boolean): $List<($SlotEntryReference)>
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "addPersistentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "getSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "clearSlotModifiers"(): void
 "clearCachedSlotModifiers"(): void
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean, additionalCheck: $TriFunction$$Type<($Accessory), ($ItemStack), ($SlotReference), (boolean)>): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($List<($ItemStack)>)>
 "entity"(): $LivingEntity
 "getContainer"(slotType: $SlotType$$Type): $AccessoriesContainer
 "getContainer"(reference: $SlotTypeReference$$Type): $AccessoriesContainer
 "reset"(arg0: boolean): void
static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesCapability
 "getHolder"(): $AccessoriesHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesCapability$$Type = ($AccessoriesCapability);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesCapability$$Original = $AccessoriesCapability;}
declare module "io.wispforest.accessories.api.caching.ItemStackBasedPredicate" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export class $ItemStackBasedPredicate implements $Predicate$$Interface<($ItemStack)> {
public static "ofItem"(name: StringJS, item: $Item$$Type): $ItemStackBasedPredicate
public static "ofItem"(item: $Item$$Type): $ItemStackBasedPredicate
public static "ofPredicate"(name: StringJS, predicate: $Predicate$$Type<($ItemStack)>): $ItemStackBasedPredicate
public static "ofPredicate"(predicate: $Predicate$$Type<($ItemStack)>): $ItemStackBasedPredicate
public "extraStringData"(): StringJS
public "name"(): StringJS
public "equals"(other: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public static "ofComponents"(...dataComponentTypes: ($DataComponentType$$Type<(never)>)[]): $ItemStackBasedPredicate
public static "ofComponents"(name: StringJS, ...dataComponentTypes: ($DataComponentType$$Type<(never)>)[]): $ItemStackBasedPredicate
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackBasedPredicate$$Type = ($ItemStackBasedPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackBasedPredicate$$Original = $ItemStackBasedPredicate;}
declare module "io.wispforest.accessories.api.slot.SlotTypeReference" {
import {$SlotType} from "io.wispforest.accessories.api.slot.SlotType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Record} from "java.lang.Record"

export class $SlotTypeReference extends $Record {
constructor(slotName: StringJS)

public "slotName"(): StringJS
public "get"(level: $Level$$Type): $SlotType
public "get"(isClientSide: boolean): $SlotType
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotTypeReference$$Type = ({"slotName"?: StringJS}) | ([slotName?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotTypeReference$$Original = $SlotTypeReference;}
declare module "io.wispforest.accessories.api.client.ArmorRenderingExtension" {
import {$AccessoryRenderer} from "io.wispforest.accessories.api.client.AccessoryRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ArmorRenderingExtension$$Interface<T extends $LivingEntity> {
}

export class $ArmorRenderingExtension<T extends $LivingEntity> implements $ArmorRenderingExtension$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "RENDERER": $AccessoryRenderer

 "renderEquipmentStack"(stack: $ItemStack$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, livingEntity: T, equipmentSlot: $EquipmentSlot$$Type, light: integer, limbSwing: float, limbSwingAmount: float, partialTicks: float, ageInTicks: float, netHeadYaw: float, headPitch: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorRenderingExtension$$Type<T> = ($ArmorRenderingExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorRenderingExtension$$Original<T> = $ArmorRenderingExtension<(T)>;}
declare module "io.wispforest.accessories.api.EquipAction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $EquipAction$$Interface {

(arg0: $ItemStack): ($ItemStack$$Type)?
}

export class $EquipAction implements $EquipAction$$Interface {
 "equipStack"(arg0: $ItemStack$$Type): $Optional<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipAction$$Type = ((arg0: $ItemStack) => ($ItemStack$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipAction$$Original = $EquipAction;}
declare module "io.wispforest.accessories.api.DropRule" {
import {$Enum} from "java.lang.Enum"

export class $DropRule extends $Enum<($DropRule)> {
static readonly "DESTROY": $DropRule
static readonly "KEEP": $DropRule
static readonly "DEFAULT": $DropRule
static readonly "DROP": $DropRule

public static "values"(): ($DropRule)[]
public static "valueOf"(name: StringJS): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRule$$Type = (("keep") | ("drop") | ("destroy") | ("default"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropRule$$Original = $DropRule;}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Entry" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $AccessoryItemAttributeModifiers$Entry extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers$Entry)>

constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean)

public "isStackable"(): boolean
public "slotName"(): StringJS
public "attribute"(): $Holder<($Attribute)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
get "stackable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Entry$$Type = ({"modifier"?: $AttributeModifier$$Type, "isStackable"?: boolean, "slotName"?: StringJS, "attribute"?: $Holder$$Type<($Attribute)>}) | ([modifier?: $AttributeModifier$$Type, isStackable?: boolean, slotName?: StringJS, attribute?: $Holder$$Type<($Attribute)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItemAttributeModifiers$Entry$$Original = $AccessoryItemAttributeModifiers$Entry;}
declare module "io.wispforest.accessories.api.attributes.AttributeModificationData" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $AttributeModificationData extends $Record {
constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type)
constructor(slotPath: StringJS, attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type)

public "slotPath"(): StringJS
public "attribute"(): $Holder<($Attribute)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeModificationData$$Type = ({"modifier"?: $AttributeModifier$$Type, "attribute"?: $Holder$$Type<($Attribute)>, "slotPath"?: StringJS}) | ([modifier?: $AttributeModifier$$Type, attribute?: $Holder$$Type<($Attribute)>, slotPath?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeModificationData$$Original = $AttributeModificationData;}
declare module "io.wispforest.accessories.api.client.Side" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$Enum} from "java.lang.Enum"
import {$Direction} from "net.minecraft.core.Direction"

export class $Side extends $Enum<($Side)> {
static readonly "TOP": $Side
static readonly "LEFT": $Side
static readonly "BACK": $Side
static readonly "FRONT": $Side
static readonly "RIGHT": $Side
static readonly "ENDEC": $Endec<($Side)>
static readonly "BOTTOM": $Side
readonly "direction": $Direction

public static "values"(): ($Side)[]
public static "valueOf"(name: StringJS): $Side
public "rotationAxis"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Side$$Type = (("bottom") | ("top") | ("back") | ("front") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Side$$Original = $Side;}
declare module "io.wispforest.accessories.api.AccessoryItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$SoundEventData} from "io.wispforest.accessories.api.SoundEventData"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$AccessoryItemAttributeModifiers$Builder$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Accessory$$Interface} from "io.wispforest.accessories.api.Accessory"

export class $AccessoryItem extends $Item implements $Accessory$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "canEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
public "onBreak"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "getDropRule"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, source: $DamageSource$$Type): $DropRule
public "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>): void
public "onEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "onUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "canUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
public "onEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
/**
 * 
 * @deprecated
 */
public "canEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
public "canEquipFromUse"(stack: $ItemStack$$Type): boolean
public "getDynamicModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
public "getStaticModifiers"(item: $Item$$Type, builder: $AccessoryItemAttributeModifiers$Builder$$Type): void
/**
 * 
 * @deprecated
 */
public "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>): void
public "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
public "tick"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "maxStackSize"(stack: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
public "getModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
public "getEquipSound"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): $SoundEventData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItem$$Type = ($AccessoryItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItem$$Original = $AccessoryItem;}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AccessoryItemAttributeModifiers} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AccessoryItemAttributeModifiers$Builder {
public "addForSlot"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForAny"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "showInTooltip"(value: boolean): $AccessoryItemAttributeModifiers$Builder
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "add"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "build"(): $AccessoryItemAttributeModifiers
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Builder$$Type = ($AccessoryItemAttributeModifiers$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItemAttributeModifiers$Builder$$Original = $AccessoryItemAttributeModifiers$Builder;}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers" {
import {$AccessoryAttributeBuilder, $AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$Endec} from "io.wispforest.endec.Endec"
import {$AccessoryItemAttributeModifiers$Builder} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$AccessoryItemAttributeModifiers$Entry, $AccessoryItemAttributeModifiers$Entry$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Entry"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryItemAttributeModifiers extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers)>
static readonly "EMPTY": $AccessoryItemAttributeModifiers

constructor(modifiers: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, showInTooltip: boolean)

public "showInTooltip"(): boolean
public "withModifierAdded"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers
public "gatherAttributes"(slotReference: $SlotReference$$Type, parentBuilder: $AccessoryAttributeBuilder$$Type): $AccessoryAttributeBuilder
public "gatherAttributes"(slotReference: $SlotReference$$Type): $AccessoryAttributeBuilder
public "withModifierAddedForAny"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers
public "withoutModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AccessoryItemAttributeModifiers
public "modifiers"(): $List<($AccessoryItemAttributeModifiers$Entry)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $AccessoryItemAttributeModifiers$Builder
public "hasModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): boolean
public "getModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$$Type = ({"modifiers"?: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, "showInTooltip"?: boolean}) | ([modifiers?: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItemAttributeModifiers$$Original = $AccessoryItemAttributeModifiers;}
declare module "io.wispforest.accessories.api.AccessoriesContainer" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$List} from "java.util.List"
import {$ExpandedSimpleContainer} from "io.wispforest.accessories.impl.ExpandedSimpleContainer"
import {$AccessoriesCapability} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$SlotType} from "io.wispforest.accessories.api.slot.SlotType"
import {$Set} from "java.util.Set"
import {$SlotReference} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoriesContainer$$Interface {
get "accessories"(): $ExpandedSimpleContainer
get "cosmeticAccessories"(): $ExpandedSimpleContainer
get "slotName"(): StringJS
get "cachedModifiers"(): $Set<($AttributeModifier)>
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "size"(): integer
}

export class $AccessoriesContainer implements $AccessoriesContainer$$Interface {
 "addPersistentModifier"(arg0: $AttributeModifier$$Type): void
 "markChanged"(): void
 "markChanged"(arg0: boolean): void
 "clearModifiers"(): void
 "slotType"(): $SlotType
 "getAccessories"(): $ExpandedSimpleContainer
 "getCosmeticAccessories"(): $ExpandedSimpleContainer
 "getSlotName"(): StringJS
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "renderOptions"(): $List<(boolean)>
 "getModifiersForOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "removeCachedModifiers"(arg0: $AttributeModifier$$Type): void
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
 "getSize"(): integer
 "createReference"(index: integer): $SlotReference
 "hasModifier"(arg0: $ResourceLocation$$Type): boolean
 "capability"(): $AccessoriesCapability
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "shouldRender"(index: integer): boolean
 "hasChanged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainer$$Type = ($AccessoriesContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesContainer$$Original = $AccessoriesContainer;}
declare module "io.wispforest.accessories.api.AccessoriesHolder" {
import {$PlayerEquipControl, $PlayerEquipControl$$Type} from "io.wispforest.accessories.impl.PlayerEquipControl"
import {$Optional} from "java.util.Optional"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AccessoriesHolderLookupCache} from "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache"

export interface $AccessoriesHolder$$Interface {
get "lookupCache"(): $AccessoriesHolderLookupCache
get "groupFiltersOpen"(): boolean
}

export class $AccessoriesHolder implements $AccessoriesHolder$$Interface {
static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesHolder)>
 "getLookupCache"(): $AccessoriesHolderLookupCache
 "equipControl"(arg0: $PlayerEquipControl$$Type): $AccessoriesHolder
 "equipControl"(): $PlayerEquipControl
 "showAdvancedOptions"(arg0: boolean): $AccessoriesHolder
 "showAdvancedOptions"(): boolean
 "showUnusedSlots"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(): boolean
 "columnAmount"(): integer
 "columnAmount"(arg0: integer): $AccessoriesHolder
 "showGroupFilter"(): boolean
 "showGroupFilter"(arg0: boolean): $AccessoriesHolder
 "mainWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "mainWidgetPosition"(): boolean
 "sideWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "sideWidgetPosition"(): boolean
 "showCraftingGrid"(): boolean
 "showCraftingGrid"(arg0: boolean): $AccessoriesHolder
 "isGroupFiltersOpen"(): boolean
 "isGroupFiltersOpen"(arg0: boolean): $AccessoriesHolder
 "filteredGroups"(arg0: $Set$$Type<(StringJS)>): $AccessoriesHolder
 "filteredGroups"(): $Set<(StringJS)>
 "cosmeticsShown"(arg0: boolean): $AccessoriesHolder
 "cosmeticsShown"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(value: boolean): $AccessoriesHolder
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(value: boolean): $AccessoriesHolder
 "widgetType"(): integer
 "widgetType"(arg0: integer): $AccessoriesHolder
static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolder$$Type = ($AccessoriesHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesHolder$$Original = $AccessoriesHolder;}
