declare module "dev.shadowsoffire.apothic_spawners.advancements.ModifierTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$SpawnerModifier$$Type} from "dev.shadowsoffire.apothic_spawners.modifiers.SpawnerModifier"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ModifierTrigger$TriggerInstance} from "dev.shadowsoffire.apothic_spawners.advancements.ModifierTrigger$TriggerInstance"
import {$ApothSpawnerTile$$Type} from "dev.shadowsoffire.apothic_spawners.block.ApothSpawnerTile"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ModifierTrigger extends $SimpleCriterionTrigger<($ModifierTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ApothSpawnerTile$$Type, arg2: $SpawnerModifier$$Type): void
public "codec"(): $Codec<($ModifierTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifierTrigger$$Type = ($ModifierTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifierTrigger$$Original = $ModifierTrigger;}
declare module "dev.shadowsoffire.apothic_spawners.advancements.ModifierTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$SpawnerModifier$$Type} from "dev.shadowsoffire.apothic_spawners.modifiers.SpawnerModifier"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ApothSpawnerTile$$Type} from "dev.shadowsoffire.apothic_spawners.block.ApothSpawnerTile"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ModifierTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ModifierTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, minDelay: $MinMaxBounds$Ints$$Type, maxDelay: $MinMaxBounds$Ints$$Type, spawnCount: $MinMaxBounds$Ints$$Type, nearbyEnts: $MinMaxBounds$Ints$$Type, playerRange: $MinMaxBounds$Ints$$Type, spawnRange: $MinMaxBounds$Ints$$Type, ignorePlayers: (boolean)?, ignoreConditions: (boolean)?, redstone: (boolean)?, ignoreLight: (boolean)?, noAI: (boolean)?, silent: (boolean)?, youthful: (boolean)?)

public "nearbyEnts"(): $MinMaxBounds$Ints
public "playerRange"(): $MinMaxBounds$Ints
public "ignorePlayers"(): $Optional<(boolean)>
public "ignoreConditions"(): $Optional<(boolean)>
public "ignoreLight"(): $Optional<(boolean)>
public "noAI"(): $Optional<(boolean)>
public "redstone"(): $Optional<(boolean)>
public "spawnCount"(): $MinMaxBounds$Ints
public "spawnRange"(): $MinMaxBounds$Ints
public "minDelay"(): $MinMaxBounds$Ints
public "maxDelay"(): $MinMaxBounds$Ints
public "youthful"(): $Optional<(boolean)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: $ApothSpawnerTile$$Type, arg2: $SpawnerModifier$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "silent"(): $Optional<(boolean)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifierTrigger$TriggerInstance$$Type = ({"spawnRange"?: $MinMaxBounds$Ints$$Type, "redstone"?: (boolean)?, "nearbyEnts"?: $MinMaxBounds$Ints$$Type, "silent"?: (boolean)?, "youthful"?: (boolean)?, "noAI"?: (boolean)?, "maxDelay"?: $MinMaxBounds$Ints$$Type, "spawnCount"?: $MinMaxBounds$Ints$$Type, "ignorePlayers"?: (boolean)?, "ignoreConditions"?: (boolean)?, "playerRange"?: $MinMaxBounds$Ints$$Type, "minDelay"?: $MinMaxBounds$Ints$$Type, "player"?: ($ContextAwarePredicate$$Type)?, "ignoreLight"?: (boolean)?}) | ([spawnRange?: $MinMaxBounds$Ints$$Type, redstone?: (boolean)?, nearbyEnts?: $MinMaxBounds$Ints$$Type, silent?: (boolean)?, youthful?: (boolean)?, noAI?: (boolean)?, maxDelay?: $MinMaxBounds$Ints$$Type, spawnCount?: $MinMaxBounds$Ints$$Type, ignorePlayers?: (boolean)?, ignoreConditions?: (boolean)?, playerRange?: $MinMaxBounds$Ints$$Type, minDelay?: $MinMaxBounds$Ints$$Type, player?: ($ContextAwarePredicate$$Type)?, ignoreLight?: (boolean)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifierTrigger$TriggerInstance$$Original = $ModifierTrigger$TriggerInstance;}
