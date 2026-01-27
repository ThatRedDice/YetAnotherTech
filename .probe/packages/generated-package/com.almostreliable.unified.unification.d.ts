declare module "com.almostreliable.unified.unification.worldgen.WorldGenBiomeModifier" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WorldGenBiomeModifier implements $BiomeModifier$$Interface {
static readonly "CODEC": $MapCodec<($BiomeModifier)>
static readonly "UNKNOWN_BIOME_ID": $ResourceLocation

constructor()

public static "bindUnifier"(modifier: $WorldGenBiomeModifier$$Type, registryAccess: $RegistryAccess$$Type): void
public "modify"(biome: $Holder$$Type<($Biome)>, phase: $BiomeModifier$Phase$$Type, builder: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
public "codec"(): $MapCodec<($BiomeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenBiomeModifier$$Type = ($WorldGenBiomeModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldGenBiomeModifier$$Original = $WorldGenBiomeModifier;}
declare module "com.almostreliable.unified.unification.loot.LootUnificationHandler" {
import {$UnificationLookup, $UnificationLookup$$Type} from "com.almostreliable.unified.api.unification.UnificationLookup"
import {$LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootUnificationHandler$$Interface {

(arg0: $UnificationLookup): boolean
}

export class $LootUnificationHandler implements $LootUnificationHandler$$Interface {
 "almostunified$unify"(arg0: $UnificationLookup$$Type): boolean
static "cast"(table: $LootTable$$Type): $LootUnificationHandler
static "cast"(pool: $LootPool$$Type): $LootUnificationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootUnificationHandler$$Type = ((arg0: $UnificationLookup) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootUnificationHandler$$Original = $LootUnificationHandler;}
