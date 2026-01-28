declare module "com.starfish_studios.another_furniture.entity.SeatEntity" {
import {$Optional} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"

export class $SeatEntity extends $Entity {
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

constructor(level: $Level$$Type)
constructor(level: $Level$$Type, pos: $BlockPos$$Type)

public "getPassengersRidingOffset"(): double
public static "getEntitySeatOffset"(entity: $Entity$$Type): double
public "tick"(): void
public "getPassengerRidingPosition"(entity: $Entity$$Type): $Vec3
public "getDismountLocationForPassenger"(entity: $LivingEntity$$Type): $Vec3
public "getAddEntityPacket"(entity: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "passengersRidingOffset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeatEntity$$Type = ($SeatEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SeatEntity$$Original = $SeatEntity;}
