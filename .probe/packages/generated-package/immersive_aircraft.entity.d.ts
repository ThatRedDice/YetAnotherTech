declare module "immersive_aircraft.entity.EngineVehicle$GUI_STYLE" {
import {$Enum} from "java.lang.Enum"

export class $EngineVehicle$GUI_STYLE extends $Enum<($EngineVehicle$GUI_STYLE)> {
static readonly "ENGINE": $EngineVehicle$GUI_STYLE
static readonly "NONE": $EngineVehicle$GUI_STYLE

public static "values"(): ($EngineVehicle$GUI_STYLE)[]
public static "valueOf"(name: StringJS): $EngineVehicle$GUI_STYLE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$GUI_STYLE$$Type = (("none") | ("engine"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EngineVehicle$GUI_STYLE$$Original = $EngineVehicle$GUI_STYLE;}
declare module "immersive_aircraft.entity.EngineVehicle" {
import {$EngineVehicle$GUI_STYLE} from "immersive_aircraft.entity.EngineVehicle$GUI_STYLE"
import {$Optional} from "java.util.Optional"
import {$EnumMap} from "java.util.EnumMap"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$EngineVehicle$Cautions} from "immersive_aircraft.entity.EngineVehicle$Cautions"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Container} from "net.minecraft.world.Container"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$InterpolatedFloat} from "immersive_aircraft.util.InterpolatedFloat"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$InventoryVehicleEntity} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $EngineVehicle extends $InventoryVehicleEntity {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "engineSpinUpStrength": float
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "engineSound": float
static readonly "LOW_FUEL": integer
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
readonly "pressingInterpolatedZ": $InterpolatedFloat
readonly "cautions": $EnumMap<($EngineVehicle$Cautions), (integer)>
 "mainWarning": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "enginePower": $InterpolatedFloat
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
static readonly "TARGET_FUEL": integer
 "zOld": double
readonly "engineRotation": $InterpolatedFloat
 "mslWarning": integer
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

constructor(entityType: $EntityType$$Type<($EngineVehicle$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "getGuiStyle"(): $EngineVehicle$GUI_STYLE
public "worksUnderWater"(): boolean
public "getEngineTarget"(): float
public "getPropellerSpeed"(): float
public "setEngineTarget"(engineTarget: float): void
public "getEnginePower"(): float
public "isFuelLow"(): boolean
public "getFuelConsumption"(): float
public "consumeFuel"(consumption: float): float
public "getFuelUtilization"(): float
public "getFuelType"(): StringJS
public "emitSmokeParticle"(x: float, y: float, z: float, nx: float, ny: float, nz: float): void
public "setAnimationVariables"(tickDelta: float): void
public "tick"(): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "guiStyle"(): $EngineVehicle$GUI_STYLE
get "engineTarget"(): float
get "propellerSpeed"(): float
set "engineTarget"(value: float)
get "fuelLow"(): boolean
get "fuelConsumption"(): float
get "fuelUtilization"(): float
get "fuelType"(): StringJS
set "animationVariables"(value: float)
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$$Type = ($EngineVehicle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EngineVehicle$$Original = $EngineVehicle;}
declare module "immersive_aircraft.entity.DyeableVehicleEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$VehicleEntity, $VehicleEntity$$Type} from "immersive_aircraft.entity.VehicleEntity"
import {$InterpolatedFloat} from "immersive_aircraft.util.InterpolatedFloat"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DyeableVehicleEntity extends $VehicleEntity {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

constructor(entityType: $EntityType$$Type<($VehicleEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "readItemTag"(stack: $ItemStack$$Type): void
public "addItemTag"(stack: $ItemStack$$Type): void
public "setDyeColor"(v: integer): void
public "getBodyColor"(): integer
public "getDefaultDyeColor"(): integer
public "getHighlightColor"(): integer
public "getDyeColor"(): integer
public "getDisplayName"(): $Component
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
set "dyeColor"(value: integer)
get "bodyColor"(): integer
get "defaultDyeColor"(): integer
get "highlightColor"(): integer
get "dyeColor"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableVehicleEntity$$Type = ($DyeableVehicleEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeableVehicleEntity$$Original = $DyeableVehicleEntity;}
declare module "immersive_aircraft.entity.InventoryVehicleEntity" {
import {$VehicleStat$$Type} from "immersive_aircraft.item.upgrade.VehicleStat"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$DyeableVehicleEntity} from "immersive_aircraft.entity.DyeableVehicleEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ContainerListener$$Interface} from "net.minecraft.world.ContainerListener"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Set$$Type} from "java.util.Set"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$HasCustomInventoryScreen$$Interface} from "net.minecraft.world.entity.HasCustomInventoryScreen"
import {$WeaponMount} from "immersive_aircraft.entity.misc.WeaponMount"
import {$SparseSimpleInventory} from "immersive_aircraft.entity.inventory.SparseSimpleInventory"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Map} from "java.util.Map"
import {$VehicleProperties} from "immersive_aircraft.entity.misc.VehicleProperties"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SlotAccess} from "net.minecraft.world.entity.SlotAccess"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$VehicleInventoryDescription} from "immersive_aircraft.entity.inventory.VehicleInventoryDescription"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$InterpolatedFloat} from "immersive_aircraft.util.InterpolatedFloat"
import {$Weapon} from "immersive_aircraft.entity.weapon.Weapon"

export class $InventoryVehicleEntity extends $DyeableVehicleEntity implements $ContainerListener$$Interface, $MenuProvider$$Interface, $Container$$Interface, $HasCustomInventoryScreen$$Interface {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

constructor(entityType: $EntityType$$Type<($InventoryVehicleEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "getInventoryDescription"(): $VehicleInventoryDescription
public "getWeaponMounts"(slot: integer): $List<($WeaponMount)>
public "readItemTag"(stack: $ItemStack$$Type): void
public "getTotalUpgrade"(stat: $VehicleStat$$Type): float
public "openInventory"(player: $ServerPlayer$$Type): void
public "addItemTag"(stack: $ItemStack$$Type): void
public "canBoost"(): boolean
public "getWeapons"(): $Map<(integer), ($List<($Weapon)>)>
public "clientFireWeapons"(entity: $Entity$$Type): void
public "fireWeapon"(slot: integer, index: integer, direction: $Vector3f$$Type): void
public "getDurability"(): float
public "createMenu"(i: integer, playerInventory: $Inventory$$Type, playerEntity: $Player$$Type): $AbstractContainerMenu
public "setItem"(slot: integer, stack: $ItemStack$$Type): void
public "clearContent"(): void
public "canPlaceItem"(index: integer, stack: $ItemStack$$Type): boolean
public "containerChanged"(sender: $Container$$Type): void
public "boost"(): void
public "openCustomInventoryScreen"(player: $Player$$Type): void
public "tick"(): void
public "getItem"(slot: integer): $ItemStack
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "getProperties"(): $VehicleProperties
public "getSlot"(slot: integer): $SlotAccess
public "getSlots"(slotType: StringJS): $List<($ItemStack)>
public "interact"(player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "getInventory"(): $SparseSimpleInventory
public "setChanged"(): void
public "canTakeItem"(target: $Container$$Type, index: integer, stack: $ItemStack$$Type): boolean
public "stillValid"(player: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "isScoping"(): boolean
public "getDisplayName"(): $Component
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setChanged"(): void
public "asContainer"(): $Container
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "inventoryDescription"(): $VehicleInventoryDescription
get "weapons"(): $Map<(integer), ($List<($Weapon)>)>
get "durability"(): float
get "empty"(): boolean
get "properties"(): $VehicleProperties
get "inventory"(): $SparseSimpleInventory
get "changed"(): void
get "containerSize"(): integer
get "scoping"(): boolean
get "displayName"(): $Component
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryVehicleEntity$$Type = ($InventoryVehicleEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryVehicleEntity$$Original = $InventoryVehicleEntity;}
declare module "immersive_aircraft.entity.AircraftEntity" {
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$EnumMap} from "java.util.EnumMap"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$EngineVehicle} from "immersive_aircraft.entity.EngineVehicle"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$EngineVehicle$Cautions} from "immersive_aircraft.entity.EngineVehicle$Cautions"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Container} from "net.minecraft.world.Container"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$Trail} from "immersive_aircraft.entity.misc.Trail"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$InterpolatedFloat} from "immersive_aircraft.util.InterpolatedFloat"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $AircraftEntity extends $EngineVehicle {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "engineSpinUpStrength": float
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "engineSound": float
static readonly "LOW_FUEL": integer
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
readonly "pressingInterpolatedZ": $InterpolatedFloat
readonly "cautions": $EnumMap<($EngineVehicle$Cautions), (integer)>
 "mainWarning": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "enginePower": $InterpolatedFloat
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
static readonly "TARGET_FUEL": integer
 "zOld": double
readonly "engineRotation": $InterpolatedFloat
 "mslWarning": integer
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
 "inWaterLevel": float
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

constructor(entityType: $EntityType$$Type<($AircraftEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "getTrails"(): $List<($Trail)>
public "getWindEffect"(): $Vector3f
public "chill"(): void
public "getWindStrength"(): float
public "tick"(): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "trails"(): $List<($Trail)>
get "windEffect"(): $Vector3f
get "windStrength"(): float
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftEntity$$Type = ($AircraftEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AircraftEntity$$Original = $AircraftEntity;}
declare module "immersive_aircraft.entity.VehicleEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Matrix4f} from "org.joml.Matrix4f"
import {$MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$VehicleData} from "immersive_aircraft.entity.misc.VehicleData"
import {$Item} from "net.minecraft.world.item.Item"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockUtil$FoundRectangle$$Type} from "net.minecraft.BlockUtil$FoundRectangle"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Entity$MoveFunction$$Type} from "net.minecraft.world.entity.Entity$MoveFunction"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Matrix3f} from "org.joml.Matrix3f"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$InterpolatedFloat} from "immersive_aircraft.util.InterpolatedFloat"

export class $VehicleEntity extends $Entity {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

constructor(entityType: $EntityType$$Type<($VehicleEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "getSpeedVector"(): $Vec3
public "isPilotCreative"(): boolean
public "isWithinParticleRange"(): boolean
public "getVehicleData"(): $VehicleData
public "readItemTag"(stack: $ItemStack$$Type): void
public "setZRot"(rot: float): void
public "getVehicleTransform"(): $Matrix4f
public "getForwardDirection"(): $Vector3f
public "toVec3d"(v: $Vector3f$$Type): $Vec3
public "chill"(): void
public "getPassengerSpace"(): integer
public "addItemTag"(stack: $ItemStack$$Type): void
public "getBoost"(): integer
public "canBoost"(): boolean
public "getVehicleNormalTransform"(): $Matrix3f
public "setAnimationVariables"(tickDelta: float): void
public static "canCollide"(entity: $Entity$$Type, other: $Entity$$Type): boolean
public "getDamageWobbleSide"(): integer
public "setDamageWobbleSide"(side: integer): void
public "setDamageWobbleTicks"(wobbleTicks: integer): void
public "getDamageWobbleStrength"(): float
public "setDamageWobbleStrength"(wobbleStrength: float): void
public "getDamageWobbleTicks"(): integer
public "getShapes"(): $List<($AABB)>
public "setInputs"(x: float, y: float, z: float): void
public "copyEntityData"(entity: $Entity$$Type): void
public "getAdditionalShapes"(): $List<($AABB)>
public "isValidDimension"(): boolean
public "getGunner"(offset: integer): $Entity
public "canTurnOnEngine"(pilot: $Entity$$Type): boolean
public "getVehicleNormalTransformQuantized"(): $Matrix3f
public "getRightDirection"(): $Vector3f
public "getTopDirection"(): $Vector3f
public "getZoom"(): double
public "getDurability"(): float
public "asItem"(): $Item
public "boost"(ticks: integer): void
public "boost"(): void
public "tick"(): void
public "move"(movementType: $MoverType$$Type, movement: $Vec3$$Type): void
public "getDisplayName"(): $Component
public "getRoll"(): float
public "getRoll"(tickDelta: float): float
public "interact"(player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "setXRot"(pitch: float): void
public "setHealth"(damage: float): void
public "attack"(source: $DamageSource$$Type, amount: float): boolean
public "getHealth"(): float
public "animateHurt"(yaw: float): void
public "getDismountLocationForPassenger"(passenger: $LivingEntity$$Type): $Vec3
public "getControllingPassenger"(): $LivingEntity
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, steps: integer): void
public "isPickable"(): boolean
public "getRelativePortalPosition"(portalAxis: $Direction$Axis$$Type, portalRect: $BlockUtil$FoundRectangle$$Type): $Vec3
public "getBoundingBoxForCulling"(): $AABB
public "maxUpStep"(): float
public "getPickResult"(): $ItemStack
public "onPassengerTurned"(passenger: $Entity$$Type): void
public "shouldRenderAtSqrDistance"(distance: double): boolean
public "canCollideWith"(other: $Entity$$Type): boolean
public "canBeCollidedWith"(): boolean
public "positionRider"(passenger: $Entity$$Type, positionUpdater: $Entity$MoveFunction$$Type): void
public "onAboveBubbleCol"(drag: boolean): void
public "skipAttackInteraction"(attacker: $Entity$$Type): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "speedVector"(): $Vec3
get "pilotCreative"(): boolean
get "withinParticleRange"(): boolean
get "vehicleData"(): $VehicleData
set "ZRot"(value: float)
get "vehicleTransform"(): $Matrix4f
get "forwardDirection"(): $Vector3f
get "passengerSpace"(): integer
get "vehicleNormalTransform"(): $Matrix3f
set "animationVariables"(value: float)
get "damageWobbleSide"(): integer
set "damageWobbleSide"(value: integer)
set "damageWobbleTicks"(value: integer)
get "damageWobbleStrength"(): float
set "damageWobbleStrength"(value: float)
get "damageWobbleTicks"(): integer
get "shapes"(): $List<($AABB)>
get "additionalShapes"(): $List<($AABB)>
get "validDimension"(): boolean
get "vehicleNormalTransformQuantized"(): $Matrix3f
get "rightDirection"(): $Vector3f
get "topDirection"(): $Vector3f
get "zoom"(): double
get "durability"(): float
get "displayName"(): $Component
set "XRot"(value: float)
set "health"(value: float)
get "health"(): float
get "controllingPassenger"(): $LivingEntity
get "pickable"(): boolean
get "boundingBoxForCulling"(): $AABB
get "pickResult"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleEntity$$Type = ($VehicleEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleEntity$$Original = $VehicleEntity;}
declare module "immersive_aircraft.entity.EngineVehicle$Cautions" {
import {$Enum} from "java.lang.Enum"

export class $EngineVehicle$Cautions extends $Enum<($EngineVehicle$Cautions)> {
static readonly "PULL_UP": $EngineVehicle$Cautions
static readonly "DAMAGED": $EngineVehicle$Cautions
static readonly "VOID": $EngineVehicle$Cautions

public static "values"(): ($EngineVehicle$Cautions)[]
public static "valueOf"(name: StringJS): $EngineVehicle$Cautions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$Cautions$$Type = (("pull_up") | ("void") | ("damaged"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EngineVehicle$Cautions$$Original = $EngineVehicle$Cautions;}
