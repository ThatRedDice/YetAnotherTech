declare module "top.theillusivec4.curios.api.event.CurioCanEquipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanEquipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $TriState$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getSlotContext"(): $SlotContext
public "getEquipResult"(): $TriState
public "setEquipResult"(arg0: $TriState$$Type): void
public "getStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "equipResult"(): $TriState
set "equipResult"(value: $TriState$$Type)
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanEquipEvent$$Type = ($CurioCanEquipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCanEquipEvent$$Original = $CurioCanEquipEvent;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurio$$Interface {

(): $ItemStack$$Type
get "stack"(): $ItemStack
}

export class $ICurio implements $ICurio$$Interface {
 "canEquip"(arg0: $SlotContext$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type): boolean
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean): $ICurio$DropRule
static "playBreakAnimation"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): void
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "curioTick"(arg0: $SlotContext$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type): boolean
 "onEquipFromUse"(arg0: $SlotContext$$Type): void
 "canEquipFromUse"(arg0: $SlotContext$$Type): boolean
 "curioBreak"(arg0: $SlotContext$$Type): void
 "canSync"(arg0: $SlotContext$$Type): boolean
 "writeSyncData"(arg0: $SlotContext$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type): void
 "getStack"(): $ItemStack
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type): boolean
 "getEquipSound"(arg0: $SlotContext$$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$$Type = (() => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$$Original = $ICurio;}
declare module "top.theillusivec4.curios.api.event.SlotModifiersUpdatedEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SlotModifiersUpdatedEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $Set$$Type<(StringJS)>)

public "getTypes"(): $Set<(StringJS)>
get "types"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotModifiersUpdatedEvent$$Type = ($SlotModifiersUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotModifiersUpdatedEvent$$Original = $SlotModifiersUpdatedEvent;}
declare module "top.theillusivec4.curios.api.SlotResult" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record} from "java.lang.Record"

export class $SlotResult extends $Record {
constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "slotContext"(): $SlotContext
public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$$Type = ({"stack"?: $ItemStack$$Type, "slotContext"?: $SlotContext$$Type}) | ([stack?: $ItemStack$$Type, slotContext?: $SlotContext$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotResult$$Original = $SlotResult;}
declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDynamicStackHandler$$Interface extends $IItemHandlerModifiable$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}

export class $IDynamicStackHandler implements $IDynamicStackHandler$$Interface {
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "grow"(arg0: integer): void
 "shrink"(arg0: integer): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicStackHandler$$Type = ($IDynamicStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDynamicStackHandler$$Original = $IDynamicStackHandler;}
declare module "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$SlotResult} from "top.theillusivec4.curios.api.SlotResult"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Logger} from "org.slf4j.Logger"

export interface $ICuriosItemHandler$$Interface {
set "curios"(value: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>)
get "visibleSlots"(): integer
get "wearer"(): $LivingEntity
get "updatingInventories"(): $Set<($ICurioStacksHandler)>
get "lockedSlots"(): $Set<(StringJS)>
get "fortuneBonus"(): integer
get "modifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "slots"(): integer
get "equippedCurios"(): $IItemHandlerModifiable
get "curios"(): $Map<(StringJS), ($ICurioStacksHandler)>
}

export class $ICuriosItemHandler implements $ICuriosItemHandler$$Interface {
static readonly "LOGGER": $Logger

 "saveInventory"(arg0: boolean): $ListTag
 "getStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "isEquipped"(arg0: $Item$$Type): boolean
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "clearSlotModifiers"(): void
 "clearCachedSlotModifiers"(): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS): void
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: boolean, ...arg1: (StringJS)[]): $List<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer, arg2: boolean): $Optional<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "setCurios"(arg0: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>): void
 "getVisibleSlots"(): integer
 "isSlotActive"(arg0: StringJS, arg1: integer): boolean
 "setSlotActive"(arg0: StringJS, arg1: integer, arg2: boolean): void
 "setSlotsActive"(arg0: StringJS, arg1: boolean): void
 "getWearer"(): $LivingEntity
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
 "handleInvalidStacks"(): void
 "loadInventory"(arg0: $ListTag$$Type): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "addTransientSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "removeSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "writeTag"(): $Tag
 "readTag"(arg0: $Tag$$Type): void
 "reset"(): void
 "getModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "getSlots"(): integer
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "getEquippedCurios"(): $IItemHandlerModifiable
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "getCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$$Type = ($ICuriosItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICuriosItemHandler$$Original = $ICuriosItemHandler;}
declare module "top.theillusivec4.curios.api.type.capability.ICurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$ICurio} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurioItem$$Interface {
}

export class $ICurioItem implements $ICurioItem$$Interface {
static readonly "defaultInstance": $ICurio

 "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioItem$$Type = ($ICurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioItem$$Original = $ICurioItem;}
declare module "top.theillusivec4.curios.api.SlotContext" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"

export class $SlotContext extends $Record {
constructor(identifier: StringJS, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "entity"(): $LivingEntity
public "identifier"(): StringJS
public "visible"(): boolean
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$$Type = ({"visible"?: boolean, "entity"?: $LivingEntity$$Type, "identifier"?: StringJS, "index"?: integer, "cosmetic"?: boolean}) | ([visible?: boolean, entity?: $LivingEntity$$Type, identifier?: StringJS, index?: integer, cosmetic?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotContext$$Original = $SlotContext;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Record} from "java.lang.Record"

export class $ICurio$SoundInfo extends $Record {
constructor(soundEvent: $SoundEvent$$Type, volume: float, pitch: float)

public "soundEvent"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getSoundEvent"(): $SoundEvent
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getVolume"(): float
/**
 * 
 * @deprecated
 */
public "getPitch"(): float
public "volume"(): float
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$$Type = ({"volume"?: float, "soundEvent"?: $SoundEvent$$Type, "pitch"?: float}) | ([volume?: float, soundEvent?: $SoundEvent$$Type, pitch?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$SoundInfo$$Original = $ICurio$SoundInfo;}
declare module "top.theillusivec4.curios.api.event.CurioDropsEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: $Collection$$Type<($ItemEntity$$Type)>, arg4: integer, arg5: boolean)

public "getCurioHandler"(): $ICuriosItemHandler
public "getDrops"(): $Collection<($ItemEntity)>
public "isRecentlyHit"(): boolean
public "getSource"(): $DamageSource
public "getLootingLevel"(): integer
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "drops"(): $Collection<($ItemEntity)>
get "recentlyHit"(): boolean
get "source"(): $DamageSource
get "lootingLevel"(): integer
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioDropsEvent$$Type = ($CurioDropsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioDropsEvent$$Original = $CurioDropsEvent;}
declare module "top.theillusivec4.curios.api.event.DropRulesEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tuple} from "net.minecraft.util.Tuple"

export class $DropRulesEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: integer, arg4: boolean)

public "getCurioHandler"(): $ICuriosItemHandler
public "isRecentlyHit"(): boolean
public "getSource"(): $DamageSource
public "getOverrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
public "getLootingLevel"(): integer
get "curioHandler"(): $ICuriosItemHandler
get "recentlyHit"(): boolean
get "source"(): $DamageSource
get "overrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
get "lootingLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRulesEvent$$Type = ($DropRulesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropRulesEvent$$Original = $DropRulesEvent;}
declare module "top.theillusivec4.curios.api.extensions.ICurioSlotExtension" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $ICurioSlotExtension$$Interface {
}

export class $ICurioSlotExtension implements $ICurioSlotExtension$$Interface {
static readonly "DEFAULT": $ICurioSlotExtension

 "getCloneStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
static "from"(arg0: StringJS): $ICurioSlotExtension
 "getDisplayStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getSlotTooltip"(arg0: $SlotContext$$Type, arg1: $TooltipFlag$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioSlotExtension$$Type = ($ICurioSlotExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioSlotExtension$$Original = $ICurioSlotExtension;}
declare module "top.theillusivec4.curios.api.event.CurioCanUnequipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanUnequipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getSlotContext"(): $SlotContext
public "getUnequipResult"(): $TriState
public "setUnequipResult"(arg0: $TriState$$Type): void
public "getStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "unequipResult"(): $TriState
set "unequipResult"(value: $TriState$$Type)
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanUnequipEvent$$Type = ($CurioCanUnequipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCanUnequipEvent$$Original = $CurioCanUnequipEvent;}
declare module "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CurioAttributeModifierEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getSlotContext"(): $SlotContext
public "getOriginalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getId"(): $ResourceLocation
public "getItemStack"(): $ItemStack
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
get "slotContext"(): $SlotContext
get "originalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "id"(): $ResourceLocation
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioAttributeModifierEvent$$Type = ($CurioAttributeModifierEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioAttributeModifierEvent$$Original = $CurioAttributeModifierEvent;}
declare module "top.theillusivec4.curios.api.SlotPredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $SlotPredicate extends $Record {
static readonly "CODEC": $Codec<($SlotPredicate)>

constructor(slots: $List$$Type<(StringJS)>, index: $MinMaxBounds$Ints$$Type)

public "index"(): $MinMaxBounds$Ints
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type): boolean
public "slots"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotPredicate$$Type = ({"slots"?: $List$$Type<(StringJS)>, "index"?: $MinMaxBounds$Ints$$Type}) | ([slots?: $List$$Type<(StringJS)>, index?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotPredicate$$Original = $SlotPredicate;}
declare module "top.theillusivec4.curios.api.event.CurioChangeEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioChangeEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getSlotIndex"(): integer
public "getIdentifier"(): StringJS
public "getFrom"(): $ItemStack
public "getTo"(): $ItemStack
get "slotIndex"(): integer
get "identifier"(): StringJS
get "from"(): $ItemStack
get "to"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioChangeEvent$$Type = ($CurioChangeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioChangeEvent$$Original = $CurioChangeEvent;}
declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$IDynamicStackHandler} from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set} from "java.util.Set"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $ICurioStacksHandler$$Interface {
get "dropRule"(): $ICurio$DropRule
get "activeStates"(): $NonNullList<(boolean)>
get "cosmeticStacks"(): $IDynamicStackHandler
get "permanentModifiers"(): $Set<($AttributeModifier)>
get "cachedModifiers"(): $Set<($AttributeModifier)>
get "syncTag"(): $CompoundTag
get "sizeShift"(): integer
get "identifier"(): StringJS
get "stacks"(): $IDynamicStackHandler
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "slots"(): integer
get "renders"(): $NonNullList<(boolean)>
get "visible"(): boolean
}

export class $ICurioStacksHandler implements $ICurioStacksHandler$$Interface {
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "clearModifiers"(): void
 "getDropRule"(): $ICurio$DropRule
 "getActiveStates"(): $NonNullList<(boolean)>
 "getCosmeticStacks"(): $IDynamicStackHandler
 "updateActiveState"(arg0: integer): void
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getSyncTag"(): $CompoundTag
 "applySyncTag"(arg0: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
 "getIdentifier"(): StringJS
 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "getSlots"(): integer
 "getRenders"(): $NonNullList<(boolean)>
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "isVisible"(): boolean
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$$Type = ($ICurioStacksHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioStacksHandler$$Original = $ICurioStacksHandler;}
declare module "top.theillusivec4.curios.api.extensions.RegisterCuriosExtensionsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ICurioSlotExtension$$Type} from "top.theillusivec4.curios.api.extensions.ICurioSlotExtension"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterCuriosExtensionsEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "registerSlotExtension"(arg0: $ICurioSlotExtension$$Type, ...arg1: (StringJS)[]): void
public "isSlotExtensionRegistered"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCuriosExtensionsEvent$$Type = ($RegisterCuriosExtensionsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCuriosExtensionsEvent$$Original = $RegisterCuriosExtensionsEvent;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$DropRule" {
import {$Enum} from "java.lang.Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "DEFAULT": $ICurio$DropRule

public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: StringJS): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$$Type = (("default") | ("always_drop") | ("always_keep") | ("destroy"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$DropRule$$Original = $ICurio$DropRule;}
