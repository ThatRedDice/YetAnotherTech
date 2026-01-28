declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance" {
import {$ISerializable$$Interface} from "io.redspace.ironsspellbooks.api.network.ISerializable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $RecastInstance implements $ISerializable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
constructor()
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, arg4: $CastSource$$Type, arg5: $ICastDataSerializable$$Type)

public "getTotalRecasts"(): integer
public "getTicksRemaining"(): integer
public "getTicksToLive"(): integer
public "getSpellId"(): StringJS
public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getCastData"(): $ICastDataSerializable
public "getRemainingRecasts"(): integer
public "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "totalRecasts"(): integer
get "ticksRemaining"(): integer
get "ticksToLive"(): integer
get "spellId"(): StringJS
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "castData"(): $ICastDataSerializable
get "remainingRecasts"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastInstance$$Type = ($RecastInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecastInstance$$Original = $RecastInstance;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastResult" {
import {$Enum} from "java.lang.Enum"

export class $RecastResult extends $Enum<($RecastResult)> {
static readonly "USER_CANCEL": $RecastResult
static readonly "DEATH": $RecastResult
static readonly "COMMAND": $RecastResult
static readonly "TIMEOUT": $RecastResult
static readonly "COUNTERSPELL": $RecastResult
static readonly "USED_ALL_RECASTS": $RecastResult

public "isFailure"(): boolean
public static "values"(): ($RecastResult)[]
public static "valueOf"(arg0: StringJS): $RecastResult
public "isSuccess"(): boolean
get "failure"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastResult$$Type = (("timeout") | ("counterspell") | ("death") | ("used_all_recasts") | ("command") | ("user_cancel"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecastResult$$Original = $RecastResult;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$SpinAttackType, $SpinAttackType$$Type} from "io.redspace.ironsspellbooks.player.SpinAttackType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SpellSelection, $SpellSelection$$Type} from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"

export class $SyncedSpellData {
constructor(arg0: $LivingEntity$$Type)
constructor(arg0: integer)

public "isCasting"(): boolean
public "setSpinAttackType"(arg0: $SpinAttackType$$Type): void
public "syncToPlayer"(arg0: $ServerPlayer$$Type): void
public "getCastingSpellId"(): StringJS
public "getCastingSpellLevel"(): integer
public "isSpellLearned"(arg0: $AbstractSpell$$Type): boolean
public "getCastingEquipmentSlot"(): StringJS
public "saveNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setEvasionHitsRemaining"(arg0: integer): void
public "subtractEvasionHit"(): void
public "getEvasionHitsRemaining"(): integer
public "setHeartstopAccumulatedDamage"(arg0: float): void
public "getHeartstopAccumulatedDamage"(): float
public "doSync"(): void
public "addHeartstopDamage"(arg0: float): void
public "setIsCasting"(arg0: boolean, arg1: StringJS, arg2: integer, arg3: StringJS): void
public "getSpinAttackType"(): $SpinAttackType
public "toString"(): StringJS
public static "write"(arg0: $FriendlyByteBuf$$Type, arg1: $SyncedSpellData$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $SyncedSpellData
public "getPersistentData"(arg0: $ServerPlayer$$Type): $SyncedSpellData
public "getServerPlayerId"(): integer
public "learnSpell"(arg0: $AbstractSpell$$Type): void
public "learnSpell"(arg0: $AbstractSpell$$Type, arg1: boolean): void
public "getSpellSelection"(): $SpellSelection
public "setSpellSelection"(arg0: $SpellSelection$$Type): void
public "forgetAllSpells"(): void
get "casting"(): boolean
set "spinAttackType"(value: $SpinAttackType$$Type)
get "castingSpellId"(): StringJS
get "castingSpellLevel"(): integer
get "castingEquipmentSlot"(): StringJS
set "evasionHitsRemaining"(value: integer)
get "evasionHitsRemaining"(): integer
set "heartstopAccumulatedDamage"(value: float)
get "heartstopAccumulatedDamage"(): float
get "spinAttackType"(): $SpinAttackType
get "serverPlayerId"(): integer
get "spellSelection"(): $SpellSelection
set "spellSelection"(value: $SpellSelection$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedSpellData$$Type = ($SyncedSpellData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedSpellData$$Original = $SyncedSpellData;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns" {
import {$Map} from "java.util.Map"
import {$CooldownInstance, $CooldownInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $PlayerCooldowns {
static readonly "SPELL_ID": StringJS
static readonly "COOLDOWN_REMAINING": StringJS
static readonly "SPELL_COOLDOWN": StringJS

constructor()

public "decrementCooldown"(arg0: $CooldownInstance$$Type, arg1: integer): boolean
public "syncToPlayer"(arg0: $ServerPlayer$$Type): void
public "removeCooldown"(arg0: StringJS): boolean
public "clearCooldowns"(): void
public "saveNBTData"(): $ListTag
public "loadNBTData"(arg0: $ListTag$$Type): void
public "getSpellCooldowns"(): $Map<(StringJS), ($CooldownInstance)>
public "hasCooldownsActive"(): boolean
public "tick"(arg0: integer): void
public "getCooldownPercent"(arg0: $AbstractSpell$$Type): float
public "addCooldown"(arg0: $AbstractSpell$$Type, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: StringJS, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: StringJS, arg1: integer): void
public "addCooldown"(arg0: $AbstractSpell$$Type, arg1: integer): void
public "isOnCooldown"(arg0: $AbstractSpell$$Type): boolean
public "setTickBuffer"(arg0: integer): void
get "spellCooldowns"(): $Map<(StringJS), ($CooldownInstance)>
set "tickBuffer"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerCooldowns$$Type = ($PlayerCooldowns);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerCooldowns$$Original = $PlayerCooldowns;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CooldownInstance {
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "getCooldownRemaining"(): integer
public "getSpellCooldown"(): integer
public "decrementBy"(arg0: integer): void
public "decrement"(): void
public "getCooldownPercent"(): float
get "cooldownRemaining"(): integer
get "spellCooldown"(): integer
get "cooldownPercent"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownInstance$$Type = ($CooldownInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CooldownInstance$$Original = $CooldownInstance;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts" {
import {$Map$$Type} from "java.util.Map"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$RecastInstance, $RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$List} from "java.util.List"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PlayerRecasts {
constructor()
constructor(arg0: $Map$$Type<(StringJS), ($RecastInstance$$Type)>)
constructor(arg0: $ServerPlayer$$Type)

public "syncToPlayer"(arg0: $RecastInstance$$Type): void
public "getActiveRecasts"(): $List<($RecastInstance)>
public "hasRecastForSpell"(arg0: $AbstractSpell$$Type): boolean
public "hasRecastForSpell"(arg0: StringJS): boolean
public "decrementRecastCount"(arg0: StringJS): void
public "decrementRecastCount"(arg0: $AbstractSpell$$Type): void
public "addRecast"(arg0: $RecastInstance$$Type, arg1: $MagicData$$Type): boolean
public "getRecastInstance"(arg0: StringJS): $RecastInstance
public "removeRecast"(arg0: $RecastInstance$$Type, arg1: $RecastResult$$Type): void
public "removeRecast"(arg0: StringJS): void
public "saveNBTData"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "loadNBTData"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "syncAllToPlayer"(): void
public "hasRecastsActive"(): boolean
public "tickRecasts"(): void
public "forceAddRecast"(arg0: $RecastInstance$$Type): void
public "tick"(arg0: integer): void
public "toString"(): StringJS
public "removeAll"(arg0: $RecastResult$$Type): void
public "isRecastActive"(arg0: $RecastInstance$$Type): boolean
public "syncRemoveToPlayer"(arg0: StringJS): void
public "getAllRecasts"(): $List<($RecastInstance)>
public "getRemainingRecastsForSpell"(arg0: StringJS): integer
public "getRemainingRecastsForSpell"(arg0: $AbstractSpell$$Type): integer
get "activeRecasts"(): $List<($RecastInstance)>
get "allRecasts"(): $List<($RecastInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRecasts$$Type = ($PlayerRecasts);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRecasts$$Original = $PlayerRecasts;}
