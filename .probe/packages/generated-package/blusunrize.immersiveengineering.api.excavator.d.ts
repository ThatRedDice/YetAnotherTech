declare module "blusunrize.immersiveengineering.api.excavator.MineralMix" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$MineralMix$BiomeTagPredicate, $MineralMix$BiomeTagPredicate$$Type} from "blusunrize.immersiveengineering.api.excavator.MineralMix$BiomeTagPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$Random$$Type} from "java.util.Random"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$StackWithChance, $StackWithChance$$Type} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"

export class $MineralMix extends $IESerializableRecipe {
readonly "outputs": $List<($StackWithChance)>
readonly "biomeTagPredicates": $ImmutableSet<($MineralMix$BiomeTagPredicate)>
readonly "spoils": $List<($StackWithChance)>
readonly "background": $Block
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($MineralMix)>)>
readonly "weight": integer
static readonly "RECIPES": $CachedRecipeList<($MineralMix)>
readonly "failChance": float

constructor(arg0: $List$$Type<($StackWithChance$$Type)>, arg1: $List$$Type<($StackWithChance$$Type)>, arg2: integer, arg3: float, arg4: $Collection$$Type<($MineralMix$BiomeTagPredicate$$Type)>, arg5: $Block$$Type)

public static "getTranslationKey"(arg0: $ResourceLocation$$Type): StringJS
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "validBiome"(arg0: $Holder$$Type<($Biome)>): boolean
public static "getPlainName"(arg0: $ResourceLocation$$Type): StringJS
public "getRandomOre"(arg0: $Random$$Type): $ItemStack
public "getRandomSpoil"(arg0: $Random$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralMix$$Type = ($MineralMix);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineralMix$$Original = $MineralMix;}
declare module "blusunrize.immersiveengineering.api.excavator.MineralMix$BiomeTagPredicate" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $MineralMix$BiomeTagPredicate extends $Record implements $Predicate$$Interface<($Holder<($Biome)>)> {
constructor(arg0: $TagKey$$Type<($Biome)>)
constructor(tags: $Set$$Type<($TagKey$$Type<($Biome$$Type)>)>)

public "tags"(): $Set<($TagKey<($Biome)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $Holder$$Type<($Biome)>): boolean
public "test"(arg0: any): boolean
public static "not"<T>(arg0: $Predicate$$Type<($Holder<($Biome)>)>): $Predicate<($Holder<($Biome)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($Holder<($Biome)>)>
public "negate"(): $Predicate<($Holder<($Biome)>)>
public "and"(arg0: $Predicate$$Type<($Holder<($Biome)>)>): $Predicate<($Holder<($Biome)>)>
public "or"(arg0: $Predicate$$Type<($Holder<($Biome)>)>): $Predicate<($Holder<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralMix$BiomeTagPredicate$$Type = ({"tags"?: $Set$$Type<($TagKey$$Type<($Biome$$Type)>)>}) | ([tags?: $Set$$Type<($TagKey$$Type<($Biome$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineralMix$BiomeTagPredicate$$Original = $MineralMix$BiomeTagPredicate;}
declare module "blusunrize.immersiveengineering.api.excavator.MineralWorldInfo" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Random$$Type} from "java.util.Random"
import {$MineralVein, $MineralVein$$Type} from "blusunrize.immersiveengineering.api.excavator.MineralVein"

export class $MineralWorldInfo {
constructor(arg0: $List$$Type<($Pair$$Type<($MineralVein$$Type), (integer)>)>)

public "getTotalWeight"(): integer
public "getAllVeins"(): $List<($Pair<($MineralVein), (integer)>)>
public "getMineralVein"(arg0: $Random$$Type): $MineralVein
get "totalWeight"(): integer
get "allVeins"(): $List<($Pair<($MineralVein), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralWorldInfo$$Type = ($MineralWorldInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineralWorldInfo$$Original = $MineralWorldInfo;}
declare module "blusunrize.immersiveengineering.api.excavator.MineralVein" {
import {$ColumnPos, $ColumnPos$$Type} from "net.minecraft.server.level.ColumnPos"
import {$MineralMix} from "blusunrize.immersiveengineering.api.excavator.MineralMix"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $MineralVein {
constructor(arg0: $ColumnPos$$Type, arg1: $ResourceLocation$$Type, arg2: integer)

public "getRadius"(): integer
public "getMineral"(arg0: $Level$$Type): $MineralMix
public "getMineralName"(): $ResourceLocation
public "getDepletion"(): integer
public "getFailChance"(arg0: $BlockPos$$Type): double
public "isDepleted"(): boolean
public "setDepletion"(arg0: integer): void
public static "readFromNBT"(arg0: $CompoundTag$$Type): $MineralVein
public "writeToNBT"(): $CompoundTag
public "deplete"(): void
public "getMineralHolder"(arg0: $Level$$Type): $RecipeHolder<($MineralMix)>
public "getPos"(): $ColumnPos
get "radius"(): integer
get "mineralName"(): $ResourceLocation
get "depletion"(): integer
get "depleted"(): boolean
set "depletion"(value: integer)
get "pos"(): $ColumnPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralVein$$Type = ($MineralVein);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineralVein$$Original = $MineralVein;}
