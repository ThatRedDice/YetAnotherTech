declare module "net.minecraft.client.player.Input" {
import {$Vec2} from "net.minecraft.world.phys.Vec2"

export class $Input {
 "forwardImpulse": float
 "jumping": boolean
 "left": boolean
 "leftImpulse": float
 "shiftKeyDown": boolean
 "up": boolean
 "right": boolean
 "down": boolean

constructor()

public "tick"(arg0: boolean, arg1: float): void
public "hasForwardImpulse"(): boolean
public "getMoveVector"(): $Vec2
get "moveVector"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Input$$Type = ($Input);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Input$$Original = $Input;}
declare module "net.minecraft.client.player.LocalPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Portal$Transition} from "net.minecraft.world.level.block.Portal$Transition"
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$JigsawBlockEntity$$Type} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Logger} from "org.slf4j.Logger"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Input, $Input$$Type} from "net.minecraft.client.player.Input"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IMixinLocalPlayer$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinLocalPlayer"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$PlayerRideableJumping} from "net.minecraft.world.entity.PlayerRideableJumping"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BaseCommandBlock$$Type} from "net.minecraft.world.level.BaseCommandBlock"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$PlayerAccessor$$Interface} from "forge.me.thosea.badoptimizations.mixin.accessors.PlayerAccessor"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$SlotReference, $SlotReference$$Type} from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import {$Level} from "net.minecraft.world.level.Level"
import {$Trackable} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AbstractClientPlayer} from "net.minecraft.client.player.AbstractClientPlayer"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CloseContainerTransfer$$Interface} from "io.wispforest.accessories.pond.CloseContainerTransfer"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Class} from "java.lang.Class"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$StatsCounter, $StatsCounter$$Type} from "net.minecraft.stats.StatsCounter"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$PlayerData} from "com.minecraftserverzone.weaponmaster.setup.playerdata.PlayerData"
import {$AccessorLocalPlayer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLocalPlayer"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$LocalClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.LocalClientPlayerKJS"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ClientRecipeBook, $ClientRecipeBook$$Type} from "net.minecraft.client.ClientRecipeBook"
import {$StructureBlockEntity$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$IQuiverPlayer$$Interface} from "net.mehvahdjukaar.supplementaries.common.utils.IQuiverPlayer"

export class $LocalPlayer extends $AbstractClientPlayer implements $AccessorLocalPlayer$$Interface, $IQuiverPlayer$$Interface, $IMixinLocalPlayer$$Interface, $CloseContainerTransfer$$Interface, $LocalClientPlayerKJS$$Interface, $PlayerAccessor$$Interface {
 "lastHurtByPlayerTime": integer
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "yo": double
readonly "connection": $ClientPacketListener
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
 "xBob": float
static readonly "ID_TAG": StringJS
 "elytraRotZ": float
 "elytraRotY": float
static readonly "WAKE_UP_DURATION": integer
 "elytraRotX": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "input": $Input
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
 "yBob": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
 "spinningEffectIntensity": float
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "zCloak": double
 "xBobO": float
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "tickCount": integer
 "yBobO": float
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
 "oSpinningEffectIntensity": float
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
static readonly "LOGGER": $Logger
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
readonly "minecraft": $Minecraft
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
 "playerData": $PlayerData
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
 "levelCallback": $EntityInLevelCallback
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "clientLevel": $ClientLevel
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "currentExplosionCause": $Entity

constructor(arg0: $Minecraft$$Type, arg1: $ClientLevel$$Type, arg2: $ClientPacketListener$$Type, arg3: $StatsCounter$$Type, arg4: $ClientRecipeBook$$Type, arg5: boolean, arg6: boolean)

public "move"(arg0: $MoverType$$Type, arg1: $Vec3$$Type): void
public "tick"(): void
public "drop"(arg0: boolean): boolean
public "shouldShowDeathScreen"(): boolean
public "respawn"(): void
public "isUsingItem"(): boolean
public "swing"(arg0: $InteractionHand$$Type): void
public "isHandsBusy"(): boolean
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "sendOpenInventory"(): void
public "isLocalPlayer"(): boolean
public "isUnderWater"(): boolean
public "isTextFilteringEnabled"(): boolean
public "getViewXRot"(arg0: float): float
public "isSuppressingSlidingDownLadder"(): boolean
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "removeEffectNoUpdate"(arg0: $Holder$$Type<($MobEffect)>): $MobEffectInstance
public "heal"(arg0: float): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "handleEntityEvent"(arg0: byte): void
public "aiStep"(): void
public "isEffectiveAi"(): boolean
public "serverAiStep"(): void
public "rideTick"(): void
public "getViewYRot"(arg0: float): float
public "getUsedItemHand"(): $InteractionHand
public "stopUsingItem"(): void
public "startUsingItem"(arg0: $InteractionHand$$Type): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "isShiftKeyDown"(): boolean
public "getVisualRotationYInDegrees"(): float
public "closeMenu"(): void
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "openMinecartCommandBlock"(arg0: $BaseCommandBlock$$Type): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "openStructureBlock"(arg0: $StructureBlockEntity$$Type): void
public "openJigsawBlock"(arg0: $JigsawBlockEntity$$Type): void
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "crit"(arg0: $Entity$$Type): void
public "magicCrit"(arg0: $Entity$$Type): void
public "updateTutorialInventoryAction"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ClickAction$$Type): void
public "onUpdateAbilities"(): void
public "supplementaries$getQuiver"(): $ItemStack
public "supplementaries$setQuiver"(quiver: $ItemStack$$Type): void
public "isCrouching"(): boolean
public "canSpawnSprintParticle"(): boolean
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "removeVehicle"(): void
public "getPermissionLevel"(): integer
public "getRopeHoldPosition"(arg0: float): $Vec3
public "getCurrentMood"(): float
public "clientSideCloseContainer"(): void
public "hurtTo"(arg0: float): void
public "getJumpRidingScale"(): float
public "getStatsCounter"(): $StatsCounter
public "getRecipeBook"(): $ClientRecipeBook
public "removeRecipeHighlight"(arg0: $RecipeHolder$$Type<(never)>): void
public "setPermissionLevel"(arg0: integer): void
public "setExperienceValues"(arg0: float, arg1: integer, arg2: integer): void
public "handler$dld000$journeymap$handleEntityEvent"(arg0: byte, arg1: $CallbackInfo$$Type): void
public "setShowDeathScreen"(arg0: boolean): void
public "setDoLimitedCrafting"(arg0: boolean): void
public "getDoLimitedCrafting"(): boolean
public "jumpableVehicle"(): $PlayerRideableJumping
public "handler$zbm000$immersive_aircraft$ia$isCrouching"(cir: $CallbackInfoReturnable$$Type): void
public "isMovingSlowly"(): boolean
public "resetPos"(): void
public "getActivePortalLocalTransition"(): $Portal$Transition
public "wrapOperation$bdm000$supplementaries$suppl$preventMovementWhileOperatingCannon"(instance: $Input$$Type, isSneaking: boolean, sneakingSpeedMultiplier: float, original: $Operation$$Type): void
public "handler$dnl000$midnightcontrols$onInputUpdate"(ci: $CallbackInfo$$Type): void
public "handler$dnl000$midnightcontrols$onTickMovement"(ci: $CallbackInfo$$Type): void
public "handler$dnl000$midnightcontrols$onMove"(type: $MoverType$$Type, movement: $Vec3$$Type, ci: $CallbackInfo$$Type): void
public "isAutoJumpEnabled"(): boolean
public "getWaterVision"(): float
public "onGameModeChanged"(arg0: $GameType$$Type): void
public "supplementaries$getQuiverSlot"(): $SlotReference
public "accessories$setScreenTransfer"(screen: $Screen$$Type): void
public "railways$getXRotLast"(): float
public "railways$getYRotLast"(): float
public "getPermissionLevelKonkrete"(): integer
public "getMinecraft"(): $Minecraft
public "bo$underwaterVisibilityTicks"(): integer
public "supplementaries$setQuiverSlot"(arg0: $SlotReference$$Type): void
public "isSelf"(): boolean
public "self"(): $LivingEntity
public "runCommand"(command: StringJS): void
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "notify"(notification: $NotificationToastData$$Type): void
public "getStats"(): $PlayerStatsJS
public "isMiningBlock"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "usingItem"(): boolean
get "handsBusy"(): boolean
get "localPlayer"(): boolean
get "underWater"(): boolean
get "textFilteringEnabled"(): boolean
get "suppressingSlidingDownLadder"(): boolean
get "effectiveAi"(): boolean
get "usedItemHand"(): $InteractionHand
get "shiftKeyDown"(): boolean
get "visualRotationYInDegrees"(): float
get "crouching"(): boolean
get "permissionLevel"(): integer
get "currentMood"(): float
get "jumpRidingScale"(): float
get "statsCounter"(): $StatsCounter
get "recipeBook"(): $ClientRecipeBook
set "permissionLevel"(value: integer)
set "showDeathScreen"(value: boolean)
set "doLimitedCrafting"(value: boolean)
get "doLimitedCrafting"(): boolean
get "movingSlowly"(): boolean
get "activePortalLocalTransition"(): $Portal$Transition
get "autoJumpEnabled"(): boolean
get "waterVision"(): float
get "permissionLevelKonkrete"(): integer
set "activePostShader"(value: $ResourceLocation$$Type)
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayer$$Type = ($LocalPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalPlayer$$Original = $LocalPlayer;}
declare module "net.minecraft.client.player.AbstractClientPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Trackable} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$Level} from "net.minecraft.world.level.Level"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Class} from "java.lang.Class"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$ClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ClientPlayerKJS"
import {$PlayerData} from "com.minecraftserverzone.weaponmaster.setup.playerdata.PlayerData"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$PlayerInfo} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$AbstractClientPlayerAccessor$$Interface} from "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor"

export class $AbstractClientPlayer extends $Player implements $ClientPlayerKJS$$Interface, $AbstractClientPlayerAccessor$$Interface {
 "lastHurtByPlayerTime": integer
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "ID_TAG": StringJS
 "elytraRotZ": float
 "elytraRotY": float
static readonly "WAKE_UP_DURATION": integer
 "elytraRotX": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "zCloak": double
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "tickCount": integer
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
 "playerData": $PlayerData
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
 "levelCallback": $EntityInLevelCallback
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "clientLevel": $ClientLevel
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "currentExplosionCause": $Entity

constructor(arg0: $ClientLevel$$Type, arg1: $GameProfile$$Type)

public "tick"(): void
public "isSpectator"(): boolean
public "isCreative"(): boolean
public "bo$getRenderer"(): $EntityRenderer
public "getSkin"(): $PlayerSkin
public "getFieldOfViewModifier"(): float
public "handler$zbk000$immersive_aircraft$ia$getFieldOfViewModifier"(cir: $CallbackInfoReturnable$$Type): void
public "flywheel$getPlayerInfo"(): $PlayerInfo
public "getDeltaMovementLerped"(arg0: float): $Vec3
public "isSelf"(): boolean
public "self"(): $Entity
public "notify"(notification: $NotificationToastData$$Type): void
public "getStats"(): $PlayerStatsJS
public "isMiningBlock"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "spectator"(): boolean
get "creative"(): boolean
get "skin"(): $PlayerSkin
get "fieldOfViewModifier"(): float
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayer$$Type = ($AbstractClientPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractClientPlayer$$Original = $AbstractClientPlayer;}
declare module "net.minecraft.client.player.inventory.Hotbar" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $Hotbar {
static readonly "CODEC": $Codec<($Hotbar)>

constructor()

public "load"(arg0: $HolderLookup$Provider$$Type): $List<($ItemStack)>
public "isEmpty"(): boolean
public "storeFrom"(arg0: $Inventory$$Type, arg1: $RegistryAccess$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hotbar$$Type = ($Hotbar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hotbar$$Original = $Hotbar;}
