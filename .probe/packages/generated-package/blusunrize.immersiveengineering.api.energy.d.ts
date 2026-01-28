declare module "blusunrize.immersiveengineering.api.energy.GeneratorFuel" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$FastEither} from "blusunrize.immersiveengineering.api.utils.FastEither"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SortedMap} from "java.util.SortedMap"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"

export class $GeneratorFuel extends $IESerializableRecipe {
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($GeneratorFuel)>)>
static readonly "RECIPES": $CachedRecipeList<($GeneratorFuel)>

constructor(arg0: $List$$Type<($Fluid$$Type)>, arg1: integer)
constructor(arg0: $Either$$Type<($TagKey$$Type<($Fluid$$Type)>), ($List$$Type<($Fluid$$Type)>)>, arg1: integer)
constructor(arg0: $TagKey$$Type<($Fluid)>, arg1: integer)

public "getBurnTime"(): integer
public static "getRecipeFor"(arg0: $Level$$Type, arg1: $Fluid$$Type, arg2: $GeneratorFuel$$Type): $GeneratorFuel
public "getFluids"(): $List<($Fluid)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getFluidsRaw"(): $FastEither<($TagKey<($Fluid)>), ($List<($Fluid)>)>
public static "getManualFuelList"(arg0: $Level$$Type): $SortedMap<($Component), (integer)>
public "matches"(arg0: $Fluid$$Type): boolean
get "burnTime"(): integer
get "fluids"(): $List<($Fluid)>
get "fluidsRaw"(): $FastEither<($TagKey<($Fluid)>), ($List<($Fluid)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorFuel$$Type = ($GeneratorFuel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratorFuel$$Original = $GeneratorFuel;}
declare module "blusunrize.immersiveengineering.api.energy.WindmillBiome" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$FastEither, $FastEither$$Type} from "blusunrize.immersiveengineering.api.utils.FastEither"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"

export class $WindmillBiome extends $IESerializableRecipe {
readonly "biomes": $FastEither<($TagKey<($Biome)>), ($List<($ResourceKey<($Biome)>)>)>
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($WindmillBiome)>)>
readonly "modifier": float
static readonly "ALL_BIOMES": $CachedRecipeList<($WindmillBiome)>

constructor(arg0: $TagKey$$Type<($Biome)>, arg1: float)
constructor(arg0: $FastEither$$Type<($TagKey$$Type<($Biome$$Type)>), ($List$$Type<($ResourceKey$$Type<($Biome$$Type)>)>)>, arg1: float)
constructor(arg0: $List$$Type<($ResourceKey$$Type<($Biome$$Type)>)>, arg1: float)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "matches"(arg0: $Holder$$Type<($Biome)>): boolean
public static "getBiome"(arg0: $Level$$Type, arg1: $Holder$$Type<($Biome)>, arg2: $WindmillBiome$$Type): $WindmillBiome
public "getModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBiome$$Type = ($WindmillBiome);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindmillBiome$$Original = $WindmillBiome;}
declare module "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage" {
import {$EnergyStorage} from "net.neoforged.neoforge.energy.EnergyStorage"
import {$IMutableEnergyStorage$$Interface} from "blusunrize.immersiveengineering.api.energy.IMutableEnergyStorage"

export class $MutableEnergyStorage extends $EnergyStorage implements $IMutableEnergyStorage$$Interface {
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)

public "setStoredEnergy"(arg0: integer): void
public "modifyEnergyStored"(arg0: integer): void
set "storedEnergy"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableEnergyStorage$$Type = ($MutableEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableEnergyStorage$$Original = $MutableEnergyStorage;}
declare module "blusunrize.immersiveengineering.api.energy.IMutableEnergyStorage" {
import {$IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IMutableEnergyStorage$$Interface extends $IEnergyStorage$$Interface {
set "storedEnergy"(value: integer)
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}

export class $IMutableEnergyStorage implements $IMutableEnergyStorage$$Interface {
 "setStoredEnergy"(arg0: integer): void
 "modifyEnergyStored"(arg0: integer): void
 "canExtract"(): boolean
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "canReceive"(): boolean
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMutableEnergyStorage$$Type = ($IMutableEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMutableEnergyStorage$$Original = $IMutableEnergyStorage;}
declare module "blusunrize.immersiveengineering.api.energy.ThermoelectricSource" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$FastEither} from "blusunrize.immersiveengineering.api.utils.FastEither"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SortedMap} from "java.util.SortedMap"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"

export class $ThermoelectricSource extends $IESerializableRecipe {
readonly "blocks": $FastEither<($TagKey<($Block)>), ($List<($Block)>)>
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($ThermoelectricSource)>)>
readonly "temperature": integer
static readonly "ALL_SOURCES": $CachedRecipeList<($ThermoelectricSource)>

constructor(arg0: $List$$Type<($Block$$Type)>, arg1: integer)
constructor(arg0: $TagKey$$Type<($Block)>, arg1: integer)
constructor(arg0: $Block$$Type, arg1: integer)

public "getTemperature"(): integer
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getExample"(): $Block
public "getMatchingBlocks"(): $List<($Block)>
public static "getThermalValuesSorted"(arg0: $Level$$Type, arg1: boolean): $SortedMap<($Component), (integer)>
public static "getSource"(arg0: $Level$$Type, arg1: $Block$$Type, arg2: $ThermoelectricSource$$Type): $ThermoelectricSource
public "matches"(arg0: $Block$$Type): boolean
get "example"(): $Block
get "matchingBlocks"(): $List<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoelectricSource$$Type = ($ThermoelectricSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoelectricSource$$Original = $ThermoelectricSource;}
