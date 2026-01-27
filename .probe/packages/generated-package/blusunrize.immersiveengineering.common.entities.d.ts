declare module "blusunrize.immersiveengineering.common.entities.IEMinecartEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractMinecart} from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$AbstractMinecart$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart$Type"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $IEMinecartEntity<T extends $BlockEntity> extends $AbstractMinecart implements $MenuProvider$$Interface {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
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
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getComparatorLevel"(): integer
public "getMinecartType"(): $AbstractMinecart$Type
public "getContainedBlockEntity"(): T
public "writeTileToItem"(arg0: $ItemStack$$Type): void
public "readTileFromItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): void
public "updateSynchedData"(): void
public "destroy"(arg0: $DamageSource$$Type): void
public "interact"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "getDisplayName"(): $Component
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "comparatorLevel"(): integer
get "minecartType"(): $AbstractMinecart$Type
get "containedBlockEntity"(): T
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMinecartEntity$$Type<T> = ($IEMinecartEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMinecartEntity$$Original<T> = $IEMinecartEntity<(T)>;}
declare module "blusunrize.immersiveengineering.common.entities.IEMinecartEntity$MinecartConstructor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IEMinecartEntity, $IEMinecartEntity$$Type} from "blusunrize.immersiveengineering.common.entities.IEMinecartEntity"

export interface $IEMinecartEntity$MinecartConstructor$$Interface {

(arg0: $Level, arg1: double, arg2: double, arg3: double): $IEMinecartEntity$$Type<(never)>
}

export class $IEMinecartEntity$MinecartConstructor implements $IEMinecartEntity$MinecartConstructor$$Interface {
 "make"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double): $IEMinecartEntity<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMinecartEntity$MinecartConstructor$$Type = ((arg0: $Level, arg1: double, arg2: double, arg3: double) => $IEMinecartEntity$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEMinecartEntity$MinecartConstructor$$Original = $IEMinecartEntity$MinecartConstructor;}
