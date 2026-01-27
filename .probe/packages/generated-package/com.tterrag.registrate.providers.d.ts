declare module "com.tterrag.registrate.providers.RegistrateLookupFillerProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path$$Type} from "java.nio.file.Path"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $RegistrateLookupFillerProvider$$Interface extends $RegistrateProvider$$Interface {
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "side"(): $LogicalSide
get "name"(): StringJS
}

export class $RegistrateLookupFillerProvider implements $RegistrateLookupFillerProvider$$Interface {
 "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
 "getSide"(): $LogicalSide
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLookupFillerProvider$$Type = ($RegistrateLookupFillerProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateLookupFillerProvider$$Original = $RegistrateLookupFillerProvider;}
declare module "com.tterrag.registrate.providers.RegistrateProvider" {
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$DataProvider$$Interface} from "net.minecraft.data.DataProvider"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path$$Type} from "java.nio.file.Path"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $RegistrateProvider$$Interface extends $DataProvider$$Interface {
get "side"(): $LogicalSide
get "name"(): StringJS
}

export class $RegistrateProvider implements $RegistrateProvider$$Interface {
 "getSide"(): $LogicalSide
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateProvider$$Type = ($RegistrateProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateProvider$$Original = $RegistrateProvider;}
declare module "com.tterrag.registrate.providers.ProviderType$DependencyAwareProviderType" {
import {$ProviderType$SimpleServerDataFactory$$Type} from "com.tterrag.registrate.providers.ProviderType$SimpleServerDataFactory"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map$$Type} from "java.util.Map"
import {$NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$ProviderType$Context, $ProviderType$Context$$Type} from "com.tterrag.registrate.providers.ProviderType$Context"
import {$RegistrateTagsProvider} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Function$$Type} from "java.util.function.Function"
import {$GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$RegistrateTagsProvider$Impl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$RegistrateTagsProvider$IntrinsicImpl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$ProviderType, $ProviderType$$Type, $ProviderType$$Interface} from "com.tterrag.registrate.providers.ProviderType"

export interface $ProviderType$DependencyAwareProviderType$$Interface<T extends $RegistrateProvider> extends $ProviderType$$Interface<(T)> {

(arg0: $ProviderType$Context<(T)>): T
}

export class $ProviderType$DependencyAwareProviderType<T extends $RegistrateProvider> implements $ProviderType$DependencyAwareProviderType$$Interface {
 "create"(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
static "registerTag"<T, R extends $RegistrateTagsProvider<(object)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
static "registerServerData"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
static "registerIntrinsicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
static "registerDynamicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
/**
 * 
 * @deprecated
 */
static "registerDelegate"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
static "registerProvider"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(never)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(never)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
static "create"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(never)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$DependencyAwareProviderType$$Type<T> = ((arg0: $ProviderType$Context<(T)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProviderType$DependencyAwareProviderType$$Original<T> = $ProviderType$DependencyAwareProviderType<(T)>;}
declare module "com.tterrag.registrate.providers.RegistrateItemTagsProvider" {
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$TagsProvider$TagAppender} from "net.minecraft.data.tags.TagsProvider$TagAppender"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Path$$Type} from "java.nio.file.Path"
import {$RegistrateTagsProvider$IntrinsicImpl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $RegistrateItemTagsProvider extends $RegistrateTagsProvider$IntrinsicImpl<($Item)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $ProviderType$$Type<($RegistrateItemTagsProvider$$Type)>, arg2: StringJS, arg3: $PackOutput$$Type, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg5: $CompletableFuture$$Type<($TagsProvider$TagLookup$$Type<($Block$$Type)>)>, arg6: $ExistingFileHelper$$Type)

public "copy"(arg0: $TagKey$$Type<($Block)>, arg1: $TagKey$$Type<($Item)>): void
public "addTag"(arg0: $TagKey$$Type): $TagsProvider$TagAppender
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateItemTagsProvider$$Type = ($RegistrateItemTagsProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateItemTagsProvider$$Original = $RegistrateItemTagsProvider;}
declare module "com.tterrag.registrate.providers.ProviderType$SimpleServerDataFactory" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map$$Type} from "java.util.Map"
import {$ProviderType$Context$$Type} from "com.tterrag.registrate.providers.ProviderType$Context"
import {$NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$RegistrateTagsProvider} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ProviderType$DependencyAwareProviderType$$Type, $ProviderType$DependencyAwareProviderType$$Interface} from "com.tterrag.registrate.providers.ProviderType$DependencyAwareProviderType"
import {$Function$$Type} from "java.util.function.Function"
import {$GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$RegistrateTagsProvider$Impl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$RegistrateTagsProvider$IntrinsicImpl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export interface $ProviderType$SimpleServerDataFactory$$Interface<T extends $RegistrateProvider> extends $ProviderType$DependencyAwareProviderType$$Interface<(T)> {

(arg0: $AbstractRegistrate<(never)>, arg1: $PackOutput, arg2: $CompletableFuture<($HolderLookup$Provider)>): T
}

export class $ProviderType$SimpleServerDataFactory<T extends $RegistrateProvider> implements $ProviderType$SimpleServerDataFactory$$Interface {
 "create"(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
 "asProvider"(): $ProviderType<(T)>
 "create"(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>): T
static "registerTag"<T, R extends $RegistrateTagsProvider<(object)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
static "registerServerData"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
static "registerIntrinsicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
static "registerDynamicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
/**
 * 
 * @deprecated
 */
static "registerDelegate"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
static "registerProvider"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(never)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(never)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
static "create"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(never)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$SimpleServerDataFactory$$Type<T> = ((arg0: $AbstractRegistrate<(never)>, arg1: $PackOutput, arg2: $CompletableFuture<($HolderLookup$Provider)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProviderType$SimpleServerDataFactory$$Original<T> = $ProviderType$SimpleServerDataFactory<(T)>;}
declare module "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables" {
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$FunctionUserBuilder, $FunctionUserBuilder$$Type} from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$VanillaBlockLoot} from "net.minecraft.data.loot.packs.VanillaBlockLoot"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootPoolEntryContainer$Builder$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import {$ConditionUserBuilder, $ConditionUserBuilder$$Type} from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"
import {$RegistrateLootTables$$Interface} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import {$WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export class $RegistrateBlockLootTables extends $VanillaBlockLoot implements $RegistrateLootTables$$Interface {
constructor(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(never)>, arg2: $Consumer$$Type<($RegistrateBlockLootTables)>)

public "dropWhenSilkTouch"(arg0: $Block$$Type): void
public "dropOther"(arg0: $Block$$Type, arg1: $ItemLike$$Type): void
public "applyExplosionDecay"<T extends $FunctionUserBuilder<(object)>>(arg0: $ItemLike$$Type, arg1: $FunctionUserBuilder$$Type<(T)>): T
public "applyExplosionCondition"<T extends $ConditionUserBuilder<(object)>>(arg0: $ItemLike$$Type, arg1: $ConditionUserBuilder$$Type<(T)>): T
public "createShearsDispatchTable"(arg0: $Block$$Type, arg1: $LootPoolEntryContainer$Builder$$Type<(never)>): $LootTable$Builder
public "createSilkTouchOrShearsDispatchTable"(arg0: $Block$$Type, arg1: $LootPoolEntryContainer$Builder$$Type<(never)>): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(arg0: $Block$$Type, arg1: $ItemLike$$Type, arg2: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(arg0: $Block$$Type, arg1: $ItemLike$$Type): $LootTable$Builder
public "createSingleItemTable"(arg0: $ItemLike$$Type, arg1: $NumberProvider$$Type): $LootTable$Builder
public "createSilkTouchOnlyTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public "createPotFlowerItemTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public "createSlabItemTable"(arg0: $Block$$Type): $LootTable$Builder
public "createNameableBlockEntityTable"(arg0: $Block$$Type): $LootTable$Builder
public "createShulkerBoxDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createCopperOreDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createLapisOreDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createRedstoneOreDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createBannerDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createBeeNestDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createBeeHiveDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createCaveVinesDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createOreDrop"(arg0: $Block$$Type, arg1: $Item$$Type): $LootTable$Builder
public "createMushroomBlockDrop"(arg0: $Block$$Type, arg1: $ItemLike$$Type): $LootTable$Builder
public "createGrassDrops"(arg0: $Block$$Type): $LootTable$Builder
public static "createShearsOnlyDrop"(arg0: $ItemLike$$Type): $LootTable$Builder
public "createMultifaceBlockDrops"(arg0: $Block$$Type, arg1: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createLeavesDrops"(arg0: $Block$$Type, arg1: $Block$$Type, ...arg2: (float)[]): $LootTable$Builder
public "createOakLeavesDrops"(arg0: $Block$$Type, arg1: $Block$$Type, ...arg2: (float)[]): $LootTable$Builder
public "createMangroveLeavesDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createCropDrops"(arg0: $Block$$Type, arg1: $Item$$Type, arg2: $Item$$Type, arg3: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createDoublePlantShearsDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createDoublePlantWithSeedDrops"(arg0: $Block$$Type, arg1: $Block$$Type): $LootTable$Builder
public "createCandleDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createPetalsDrops"(arg0: $Block$$Type): $LootTable$Builder
public static "createCandleCakeDrops"(arg0: $Block$$Type): $LootTable$Builder
public "addNetherVinesDropTable"(arg0: $Block$$Type, arg1: $Block$$Type): void
public "createDoorTable"(arg0: $Block$$Type): $LootTable$Builder
public "dropPottedContents"(arg0: $Block$$Type): void
public "otherWhenSilkTouch"(arg0: $Block$$Type, arg1: $Block$$Type): void
public "dropSelf"(arg0: $Block$$Type): void
public "createSilkTouchDispatchTable"(arg0: $Block$$Type, arg1: $LootPoolEntryContainer$Builder$$Type<(never)>): $LootTable$Builder
public "add"(arg0: $Block$$Type, arg1: $LootTable$Builder$$Type): void
public "getRegistries"(): $HolderLookup$Provider
public "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
get "registries"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateBlockLootTables$$Type = ($RegistrateBlockLootTables);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateBlockLootTables$$Original = $RegistrateBlockLootTables;}
declare module "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl" {
import {$RegistrateTagsProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$TagsProvider$TagLookup} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$TagsProvider} from "net.minecraft.data.tags.TagsProvider"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$TagsProvider$TagAppender} from "net.minecraft.data.tags.TagsProvider$TagAppender"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $RegistrateTagsProvider$Impl<T> extends $TagsProvider<(T)> implements $RegistrateTagsProvider$$Interface<(T)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $ProviderType$$Type<($RegistrateTagsProvider$Impl$$Type<(T)>)>, arg2: StringJS, arg3: $PackOutput$$Type, arg4: $ResourceKey$$Type<($Registry<(T)>)>, arg5: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg6: $ExistingFileHelper$$Type)

public "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "getName"(): StringJS
public "registry"(): $ResourceKey<($Registry<(T)>)>
public "getSide"(): $LogicalSide
public "addTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateTagsProvider$Impl$$Type<T> = ($RegistrateTagsProvider$Impl<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateTagsProvider$Impl$$Original<T> = $RegistrateTagsProvider$Impl<(T)>;}
declare module "com.tterrag.registrate.providers.RegistrateDataMapProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$DataMapProvider} from "net.neoforged.neoforge.common.data.DataMapProvider"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path$$Type} from "java.nio.file.Path"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RegistrateDataMapProvider extends $DataMapProvider implements $RegistrateProvider$$Interface {
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateDataMapProvider$$Type = ($RegistrateDataMapProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateDataMapProvider$$Original = $RegistrateDataMapProvider;}
declare module "com.tterrag.registrate.providers.RegistrateBlockstateProvider" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$VariantBlockStateBuilder} from "net.neoforged.neoforge.client.model.generators.VariantBlockStateBuilder"
import {$Optional} from "java.util.Optional"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$MultiPartBlockStateBuilder} from "net.neoforged.neoforge.client.model.generators.MultiPartBlockStateBuilder"
import {$BlockStateProvider} from "net.neoforged.neoforge.client.model.generators.BlockStateProvider"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Path$$Type} from "java.nio.file.Path"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $RegistrateBlockstateProvider extends $BlockStateProvider implements $RegistrateProvider$$Interface {
static readonly "WALL_PROPS": $ImmutableMap<($Direction), ($Property<($WallSide)>)>

constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $ExistingFileHelper$$Type)

public "getExistingMultipartBuilder"(arg0: $Block$$Type): $Optional<($MultiPartBlockStateBuilder)>
public "getExistingVariantBuilder"(arg0: $Block$$Type): $Optional<($VariantBlockStateBuilder)>
public "getName"(): StringJS
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateBlockstateProvider$$Type = ($RegistrateBlockstateProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateBlockstateProvider$$Original = $RegistrateBlockstateProvider;}
declare module "com.tterrag.registrate.providers.RegistrateItemModelProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map} from "java.util.Map"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemModelBuilder} from "net.neoforged.neoforge.client.model.generators.ItemModelBuilder"
import {$ExistingFileHelper$ResourceType} from "net.neoforged.neoforge.common.data.ExistingFileHelper$ResourceType"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ItemModelProvider} from "net.neoforged.neoforge.client.model.generators.ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Path$$Type} from "java.nio.file.Path"

export class $RegistrateItemModelProvider extends $ItemModelProvider implements $RegistrateProvider$$Interface {
static readonly "TEXTURE": $ExistingFileHelper$ResourceType
static readonly "ITEM_FOLDER": StringJS
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper
static readonly "BLOCK_FOLDER": StringJS

constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $ExistingFileHelper$$Type)

public "blockItem"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: StringJS): $ItemModelBuilder
public "blockItem"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "blockSprite"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: $ResourceLocation$$Type): $ItemModelBuilder
public "blockSprite"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "itemTexture"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ResourceLocation
public "handheld"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: $ResourceLocation$$Type): $ItemModelBuilder
public "handheld"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "blockWithInventoryModel"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "getName"(): StringJS
public "name"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): StringJS
public "generated"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, ...arg1: ($ResourceLocation$$Type)[]): $ItemModelBuilder
public "generated"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "modid"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): StringJS
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateItemModelProvider$$Type = ($RegistrateItemModelProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateItemModelProvider$$Original = $RegistrateItemModelProvider;}
declare module "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator" {
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"
import {$RegistrateGenericProvider$GeneratorData, $RegistrateGenericProvider$GeneratorData$$Type} from "com.tterrag.registrate.providers.RegistrateGenericProvider$GeneratorData"

export interface $RegistrateGenericProvider$Generator$$Interface {

(arg0: $RegistrateGenericProvider$GeneratorData): $DataProvider$$Type
}

export class $RegistrateGenericProvider$Generator implements $RegistrateGenericProvider$Generator$$Interface {
 "generate"(arg0: $RegistrateGenericProvider$GeneratorData$$Type): $DataProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateGenericProvider$Generator$$Type = ((arg0: $RegistrateGenericProvider$GeneratorData) => $DataProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateGenericProvider$Generator$$Original = $RegistrateGenericProvider$Generator;}
declare module "com.tterrag.registrate.providers.RegistrateAdvancementProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List$$Type} from "java.util.List"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $RegistrateAdvancementProvider implements $RegistrateProvider$$Interface, $Consumer$$Interface<($AdvancementHolder)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "withConditions"(arg0: $AdvancementHolder$$Type, arg1: $List$$Type<($ICondition$$Type)>): void
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public "resolve"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "accept"(arg0: any): void
public "accept"(arg0: $AdvancementHolder$$Type): void
public "desc"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $MutableComponent
public "getProvider"(): $HolderLookup$Provider
public "title"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $MutableComponent
public "getSide"(): $LogicalSide
public "andThen"(arg0: $Consumer$$Type<($AdvancementHolder)>): $Consumer<($AdvancementHolder)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "name"(): StringJS
get "provider"(): $HolderLookup$Provider
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateAdvancementProvider$$Type = ($RegistrateAdvancementProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateAdvancementProvider$$Original = $RegistrateAdvancementProvider;}
declare module "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables" {
import {$ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootItemCondition$Builder} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$FrogVariant$$Type} from "net.minecraft.world.entity.animal.FrogVariant"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$VanillaEntityLoot} from "net.minecraft.data.loot.packs.VanillaEntityLoot"
import {$RegistrateLootTables$$Interface} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import {$WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegistrateEntityLootTables extends $VanillaEntityLoot implements $RegistrateLootTables$$Interface {
constructor(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(never)>, arg2: $Consumer$$Type<($RegistrateEntityLootTables)>)

public static "createSheepTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public "canHaveLootTable"(arg0: $EntityType$$Type<(never)>): boolean
public "killedByFrogVariant"(arg0: $ResourceKey$$Type<($FrogVariant)>): $LootItemCondition$Builder
public "add"(arg0: $EntityType$$Type<(never)>, arg1: $ResourceKey$$Type<($LootTable)>, arg2: $LootTable$Builder$$Type): void
public "add"(arg0: $EntityType$$Type<(never)>, arg1: $LootTable$Builder$$Type): void
public "generate"(): void
public "getRegistries"(): $HolderLookup$Provider
public "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
get "registries"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateEntityLootTables$$Type = ($RegistrateEntityLootTables);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateEntityLootTables$$Original = $RegistrateEntityLootTables;}
declare module "com.tterrag.registrate.providers.RegistrateTagsProvider" {
import {$TagsProvider$TagLookup} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$RegistrateLookupFillerProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateLookupFillerProvider"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$TagsProvider$TagAppender} from "net.minecraft.data.tags.TagsProvider$TagAppender"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"

export interface $RegistrateTagsProvider$$Interface<T> extends $RegistrateLookupFillerProvider$$Interface {
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "side"(): $LogicalSide
get "name"(): StringJS
}

export class $RegistrateTagsProvider<T> implements $RegistrateTagsProvider$$Interface {
 "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
 "registry"(): $ResourceKey<($Registry<(T)>)>
 "addTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
 "getSide"(): $LogicalSide
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateTagsProvider$$Type<T> = ($RegistrateTagsProvider<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateTagsProvider$$Original<T> = $RegistrateTagsProvider<(T)>;}
declare module "com.tterrag.registrate.providers.ProviderType" {
import {$ProviderType$SimpleServerDataFactory$$Type} from "com.tterrag.registrate.providers.ProviderType$SimpleServerDataFactory"
import {$RegistrateLootTableProvider} from "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider"
import {$RegistrateDatapackProvider} from "com.tterrag.registrate.providers.RegistrateDatapackProvider"
import {$RegistrateBlockstateProvider} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$Function$$Type} from "java.util.function.Function"
import {$NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$RegistrateGenericProvider} from "com.tterrag.registrate.providers.RegistrateGenericProvider"
import {$RegistrateTagsProvider$IntrinsicImpl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$RegistrateItemModelProvider} from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ProviderType$Context$$Type} from "com.tterrag.registrate.providers.ProviderType$Context"
import {$NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$RegistrateTagsProvider} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RegistrateRecipeProvider} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$RegistrateLangProvider} from "com.tterrag.registrate.providers.RegistrateLangProvider"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$RegistrateDataMapProvider} from "com.tterrag.registrate.providers.RegistrateDataMapProvider"
import {$CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$ProviderType$DependencyAwareProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType$DependencyAwareProviderType"
import {$RegistrateItemTagsProvider} from "com.tterrag.registrate.providers.RegistrateItemTagsProvider"
import {$GatherDataEvent, $GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$RegistrateTagsProvider$Impl} from "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl"
import {$RegistrateAdvancementProvider} from "com.tterrag.registrate.providers.RegistrateAdvancementProvider"

export interface $ProviderType$$Interface<T extends $RegistrateProvider> {

(arg0: $AbstractRegistrate<(never)>, arg1: $GatherDataEvent, arg2: $Map<($ProviderType<(never)>), ($RegistrateProvider)>): T
}

export class $ProviderType<T extends $RegistrateProvider> implements $ProviderType$$Interface {
static readonly "ADVANCEMENT": $ProviderType<($RegistrateAdvancementProvider)>
static readonly "ITEM_MODEL": $ProviderType<($RegistrateItemModelProvider)>
static readonly "LOOT": $ProviderType<($RegistrateLootTableProvider)>
static readonly "LANG": $ProviderType<($RegistrateLangProvider)>
static readonly "ENTITY_TAGS": $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($EntityType<(never)>)>)>
static readonly "DYNAMIC": $ProviderType<($RegistrateDatapackProvider)>
static readonly "BLOCK_TAGS": $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($Block)>)>
static readonly "FLUID_TAGS": $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($Fluid)>)>
static readonly "GENERIC_CLIENT": $ProviderType<($RegistrateGenericProvider)>
static readonly "BLOCKSTATE": $ProviderType<($RegistrateBlockstateProvider)>
static readonly "RECIPE": $ProviderType<($RegistrateRecipeProvider)>
static readonly "ENCHANTMENT_TAGS": $ProviderType<($RegistrateTagsProvider$Impl<($Enchantment)>)>
static readonly "DATA_MAP": $ProviderType<($RegistrateDataMapProvider)>
static readonly "ITEM_TAGS": $ProviderType<($RegistrateItemTagsProvider)>
static readonly "GENERIC_SERVER": $ProviderType<($RegistrateGenericProvider)>

static "registerTag"<T, R extends $RegistrateTagsProvider<(object)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
static "registerServerData"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
static "registerIntrinsicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
static "registerDynamicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
/**
 * 
 * @deprecated
 */
static "registerDelegate"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
static "registerProvider"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(never)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(never)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
 "create"(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
static "create"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(never)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$$Type<T> = ((arg0: $AbstractRegistrate<(never)>, arg1: $GatherDataEvent, arg2: $Map<($ProviderType<(never)>), ($RegistrateProvider)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProviderType$$Original<T> = $ProviderType<(T)>;}
declare module "com.tterrag.registrate.providers.RegistrateRecipeProvider" {
import {$MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$DataIngredient$$Type} from "com.tterrag.registrate.util.DataIngredient"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List$$Type} from "java.util.List"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$EnterBlockTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance"
import {$Advancement$Builder} from "net.minecraft.advancements.Advancement$Builder"
import {$RecipeBuilder} from "net.minecraft.data.recipes.RecipeBuilder"
import {$BlockFamily$$Type} from "net.minecraft.data.BlockFamily"
import {$Holder} from "net.minecraft.core.Holder"
import {$InventoryChangeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RecipeOutput, $RecipeOutput$$Type, $RecipeOutput$$Interface} from "net.minecraft.data.recipes.RecipeOutput"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$BlockFamily$Variant$$Type} from "net.minecraft.data.BlockFamily$Variant"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$ShapedRecipeBuilder} from "net.minecraft.data.recipes.ShapedRecipeBuilder"
import {$AbstractCookingRecipe$Factory$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe$Factory"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeProvider} from "net.minecraft.data.recipes.RecipeProvider"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ShapelessRecipeBuilder} from "net.minecraft.data.recipes.ShapelessRecipeBuilder"
import {$Path$$Type} from "java.nio.file.Path"
import {$RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $RegistrateRecipeProvider extends $RecipeProvider implements $RegistrateProvider$$Interface, $RecipeOutput$$Interface {
static readonly "DEFAULT_SMOKE_TIME": integer
static readonly "DEFAULT_CAMPFIRE_TIME": integer
static readonly "DEFAULT_SMELT_TIME": integer
static readonly "DEFAULT_BLAST_TIME": integer

constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public static "grate"(arg0: $RecipeOutput$$Type, arg1: $Block$$Type, arg2: $Block$$Type): void
public "advancement"(): $Advancement$Builder
public static "banner"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public "campfire"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "campfire"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public static "candle"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "carpet"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public "door"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "slab"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS, arg4: boolean): void
public static "slab"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public "generateForEnabledBlockFamilies"(arg0: $RecipeOutput$$Type, arg1: $FeatureFlagSet$$Type): void
public "safeName"(arg0: $ItemLike$$Type): StringJS
public "safeName"(arg0: $ResourceLocation$$Type): StringJS
public "safeName"(arg0: $DataIngredient$$Type): StringJS
public "safeId"(arg0: $ItemLike$$Type): $ResourceLocation
public "safeId"(arg0: $ResourceLocation$$Type): $ResourceLocation
public "safeId"(arg0: $DataIngredient$$Type): $ResourceLocation
public "cooking"<T extends $ItemLike, S extends $AbstractCookingRecipe>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer, arg5: StringJS, arg6: $RecipeSerializer$$Type<(S)>, arg7: $AbstractCookingRecipe$Factory$$Type<(S)>): void
public "cooking"<T extends $ItemLike, S extends $AbstractCookingRecipe>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer, arg5: $RecipeSerializer$$Type<(S)>, arg6: $AbstractCookingRecipe$Factory$$Type<(S)>): void
public "smelting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "smelting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "blasting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "blasting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "smoking"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "smoking"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "stonecutting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: integer): void
public "stonecutting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>): void
public "singleItemUnfinished"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: integer, arg4: integer): $ShapelessRecipeBuilder
public "planks"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>): void
public "buildAdvancement"(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $AdvancementHolder$$Type): $CompletableFuture<(never)>
public "buildAdvancement"(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): $CompletableFuture<(never)>
public static "netheriteSmithing"(arg0: $RecipeOutput$$Type, arg1: $Item$$Type, arg2: $RecipeCategory$$Type, arg3: $Item$$Type): void
public static "trimSmithing"(arg0: $RecipeOutput$$Type, arg1: $Item$$Type, arg2: $ResourceLocation$$Type): void
public static "twoByTwoPacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "threeByThreePacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "threeByThreePacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type, arg4: StringJS): void
public static "planksFromLog"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $TagKey$$Type<($Item)>, arg3: integer): void
public static "planksFromLogs"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $TagKey$$Type<($Item)>, arg3: integer): void
public static "woodFromLogs"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "woodenBoat"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "chestBoat"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "buttonBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "doorBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "fenceBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "fenceGateBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "pressurePlate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "pressurePlateBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "slabBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "stairBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "trapdoorBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "signBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "hangingSign"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "colorBlockWithDye"(arg0: $RecipeOutput$$Type, arg1: $List$$Type<($Item$$Type)>, arg2: $List$$Type<($Item$$Type)>, arg3: StringJS): void
public static "bedFromPlanksAndWool"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "stainedGlassFromGlassAndDye"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "stainedGlassPaneFromStainedGlass"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "stainedGlassPaneFromGlassPaneAndDye"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "coloredTerracottaFromTerracottaAndDye"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "concretePowder"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "wallBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "polished"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "polishedBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "cut"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "cutBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "chiseled"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "mosaicBuilder"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "chiseledBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "stonecutterResultFromBase"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type, arg4: integer): void
public static "stonecutterResultFromBase"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "smeltingResultFromBase"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "copySmithingTemplate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): void
public static "copySmithingTemplate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $TagKey$$Type<($Item)>): void
public static "copySmithingTemplate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "waxRecipes"(arg0: $RecipeOutput$$Type, arg1: $FeatureFlagSet$$Type): void
public static "copperBulb"(arg0: $RecipeOutput$$Type, arg1: $Block$$Type, arg2: $Block$$Type): void
public static "generateRecipes"(arg0: $RecipeOutput$$Type, arg1: $BlockFamily$$Type, arg2: $FeatureFlagSet$$Type): void
public static "getBaseBlock"(arg0: $BlockFamily$$Type, arg1: $BlockFamily$Variant$$Type): $Block
public static "insideOf"(arg0: $Block$$Type): $Criterion<($EnterBlockTrigger$TriggerInstance)>
public static "inventoryTrigger"(...arg0: ($ItemPredicate$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "inventoryTrigger"(...arg0: ($ItemPredicate$Builder$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "getHasName"(arg0: $ItemLike$$Type): StringJS
public static "getItemName"(arg0: $ItemLike$$Type): StringJS
public static "getSimpleRecipeName"(arg0: $ItemLike$$Type): StringJS
public static "getConversionRecipeName"(arg0: $ItemLike$$Type, arg1: $ItemLike$$Type): StringJS
public static "getSmeltingRecipeName"(arg0: $ItemLike$$Type): StringJS
public static "getBlastingRecipeName"(arg0: $ItemLike$$Type): StringJS
public "smeltingAndBlasting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "singleItem"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: integer, arg4: integer): void
public "stairs"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS, arg4: boolean): void
public "fenceGate"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "trapDoor"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public static "has"(arg0: $MinMaxBounds$Ints$$Type, arg1: $ItemLike$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "has"(arg0: $ItemLike$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "has"(arg0: $TagKey$$Type<($Item)>): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public "wall"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>): void
public static "wall"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public "resolve"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
public "fence"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "getProvider"(): $HolderLookup$Provider
public "square"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: boolean): void
/**
 * 
 * @deprecated
 */
public "storage"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $NonNullSupplier$$Type<(T)>): void
public "storage"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $NonNullSupplier$$Type<(T)>, arg3: $DataIngredient$$Type, arg4: $NonNullSupplier$$Type<(T)>): void
public "storage"<T extends $ItemLike>(arg0: $NonNullSupplier$$Type<(T)>, arg1: $RecipeCategory$$Type, arg2: $NonNullSupplier$$Type<(T)>): void
public "getSide"(): $LogicalSide
public "food"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type): void
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
public "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput
get "provider"(): $HolderLookup$Provider
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateRecipeProvider$$Type = ($RegistrateRecipeProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateRecipeProvider$$Original = $RegistrateRecipeProvider;}
declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$LootTableProvider} from "net.minecraft.data.loot.LootTableProvider"
import {$List} from "java.util.List"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$RegistrateLootTableProvider$LootType$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$Holder} from "net.minecraft.core.Holder"
import {$LootTableProvider$SubProviderEntry} from "net.minecraft.data.loot.LootTableProvider$SubProviderEntry"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"
import {$RegistrateLootTables} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"

export class $RegistrateLootTableProvider extends $LootTableProvider implements $RegistrateProvider$$Interface {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "addLootAction"(arg0: $LootContextParamSet$$Type, arg1: $Consumer$$Type<($BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>)>): void
public "addLootAction"<T extends $RegistrateLootTables>(arg0: $RegistrateLootTableProvider$LootType$$Type<(T)>, arg1: $NonNullConsumer$$Type<(T)>): void
public "getTables"(): $List<($LootTableProvider$SubProviderEntry)>
public "resolve"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "getProvider"(): $HolderLookup$Provider
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "tables"(): $List<($LootTableProvider$SubProviderEntry)>
get "provider"(): $HolderLookup$Provider
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLootTableProvider$$Type = ($RegistrateLootTableProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateLootTableProvider$$Original = $RegistrateLootTableProvider;}
declare module "com.tterrag.registrate.providers.RegistrateGenericProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$RegistrateGenericProvider$Generator$$Type} from "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator"
import {$Path$$Type} from "java.nio.file.Path"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RegistrateGenericProvider implements $RegistrateProvider$$Interface {
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public "add"(arg0: $RegistrateGenericProvider$Generator$$Type): $RegistrateGenericProvider
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateGenericProvider$$Type = ($RegistrateGenericProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateGenericProvider$$Original = $RegistrateGenericProvider;}
declare module "com.tterrag.registrate.providers.loot.RegistrateLootTables" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootTableSubProvider$$Interface} from "net.minecraft.data.loot.LootTableSubProvider"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export interface $RegistrateLootTables$$Interface extends $LootTableSubProvider$$Interface {

(arg0: $BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}

export class $RegistrateLootTables implements $RegistrateLootTables$$Interface {
 "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
 "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLootTables$$Type = ((arg0: $BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateLootTables$$Original = $RegistrateLootTables;}
declare module "com.tterrag.registrate.providers.RegistrateDatapackProvider" {
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$DatapackBuiltinEntriesProvider} from "net.neoforged.neoforge.common.data.DatapackBuiltinEntriesProvider"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$RegistrateLookupFillerProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateLookupFillerProvider"
import {$Path$$Type} from "java.nio.file.Path"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RegistrateDatapackProvider extends $DatapackBuiltinEntriesProvider implements $RegistrateLookupFillerProvider$$Interface {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateDatapackProvider$$Type = ($RegistrateDatapackProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateDatapackProvider$$Original = $RegistrateDatapackProvider;}
declare module "com.tterrag.registrate.providers.ProviderType$Context" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$GatherDataEvent, $GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"
import {$Record} from "java.lang.Record"

export class $ProviderType$Context<T extends $RegistrateProvider> extends $Record {
constructor(type: $ProviderType$$Type<(T)>, parent: $AbstractRegistrate$$Type<(never)>, event: $GatherDataEvent$$Type, existing: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, output: $PackOutput$$Type, fileHelper: $ExistingFileHelper$$Type, provider: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "fileHelper"(): $ExistingFileHelper
public "output"(): $PackOutput
public "existing"(): $Map<($ProviderType<(never)>), ($RegistrateProvider)>
public "parent"(): $AbstractRegistrate<(never)>
public "get"<R extends $RegistrateProvider>(arg0: $ProviderType$$Type<(R)>): R
public "type"(): $ProviderType<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "provider"(): $CompletableFuture<($HolderLookup$Provider)>
/**
 * 
 * @deprecated
 */
public "event"(): $GatherDataEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$Context$$Type<T> = ({"event"?: $GatherDataEvent$$Type, "existing"?: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, "provider"?: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, "output"?: $PackOutput$$Type, "parent"?: $AbstractRegistrate$$Type<(never)>, "fileHelper"?: $ExistingFileHelper$$Type, "type"?: $ProviderType$$Type<(T)>}) | ([event?: $GatherDataEvent$$Type, existing?: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, provider?: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, output?: $PackOutput$$Type, parent?: $AbstractRegistrate$$Type<(never)>, fileHelper?: $ExistingFileHelper$$Type, type?: $ProviderType$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProviderType$Context$$Original<T> = $ProviderType$Context<(T)>;}
declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType" {
import {$RegistrateBlockLootTables} from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$RegistrateEntityLootTables} from "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables"
import {$RegistrateLootTables} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $RegistrateLootTableProvider$LootType$$Interface<T extends $RegistrateLootTables> {
get "lootSet"(): $LootContextParamSet
}

export class $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> implements $RegistrateLootTableProvider$LootType$$Interface {
static readonly "ENTITY": $RegistrateLootTableProvider$LootType<($RegistrateEntityLootTables)>
static readonly "BLOCK": $RegistrateLootTableProvider$LootType<($RegistrateBlockLootTables)>

 "getLootCreator"(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(never)>, arg2: $Consumer$$Type<(T)>): T
 "getLootSet"(): $LootContextParamSet
static "register"<T extends $RegistrateLootTables>(arg0: StringJS, arg1: $LootContextParamSet$$Type, arg2: $TriFunction$$Type<($HolderLookup$Provider), ($AbstractRegistrate<(object)>), ($Consumer<(T)>), (T)>): $RegistrateLootTableProvider$LootType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLootTableProvider$LootType$$Type<T> = ($RegistrateLootTableProvider$LootType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateLootTableProvider$LootType$$Original<T> = $RegistrateLootTableProvider$LootType<(T)>;}
declare module "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl" {
import {$RegistrateTagsProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$TagsProvider$TagLookup} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$IntrinsicHolderTagsProvider} from "net.minecraft.data.tags.IntrinsicHolderTagsProvider"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Function$$Type} from "java.util.function.Function"
import {$TagsProvider$TagAppender} from "net.minecraft.data.tags.TagsProvider$TagAppender"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $RegistrateTagsProvider$IntrinsicImpl<T> extends $IntrinsicHolderTagsProvider<(T)> implements $RegistrateTagsProvider$$Interface<(T)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $ProviderType$$Type<($RegistrateTagsProvider$IntrinsicImpl$$Type<(T)>)>, arg2: StringJS, arg3: $PackOutput$$Type, arg4: $ResourceKey$$Type<($Registry<(T)>)>, arg5: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg6: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>, arg7: $ExistingFileHelper$$Type)

public "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "getName"(): StringJS
public "registry"(): $ResourceKey<($Registry<(T)>)>
public "getSide"(): $LogicalSide
public "addTag"(arg0: $TagKey$$Type): $TagsProvider$TagAppender
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateTagsProvider$IntrinsicImpl$$Type<T> = ($RegistrateTagsProvider$IntrinsicImpl<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateTagsProvider$IntrinsicImpl$$Original<T> = $RegistrateTagsProvider$IntrinsicImpl<(T)>;}
declare module "com.tterrag.registrate.providers.DataProviderInitializer" {
import {$RegistrySetBuilder$RegistryBootstrap$$Type} from "net.minecraft.core.RegistrySetBuilder$RegistryBootstrap"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrateLookupFillerProvider$$Type} from "com.tterrag.registrate.providers.RegistrateLookupFillerProvider"
import {$ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $DataProviderInitializer {
constructor()

public "add"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $RegistrySetBuilder$RegistryBootstrap$$Type<(T)>): void
public "addDependency"(arg0: $ProviderType$$Type<(never)>, arg1: $ProviderType$$Type<($RegistrateLookupFillerProvider$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataProviderInitializer$$Type = ($DataProviderInitializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataProviderInitializer$$Original = $DataProviderInitializer;}
declare module "com.tterrag.registrate.providers.DataGenContext" {
import {$NonNullSupplier, $NonNullSupplier$$Type, $NonNullSupplier$$Interface} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Builder$$Type} from "com.tterrag.registrate.builders.Builder"

export class $DataGenContext<R, E> implements $NonNullSupplier$$Interface<(E)> {
constructor(arg0: $NonNullSupplier$$Type<(E)>, arg1: StringJS, arg2: $ResourceLocation$$Type)

public "getEntry"(): E
public "lazy"(): $NonNullSupplier<(E)>
public "getName"(): StringJS
public "get"(): E
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"<R, E>(arg0: $Builder$$Type<(R), (E), (never), (never)>): $DataGenContext<(R), (E)>
/**
 * 
 * @deprecated
 */
public static "from"<R, E>(arg0: $Builder$$Type<(R), (E), (never), (never)>, arg1: $ResourceKey$$Type<($Registry<(R)>)>): $DataGenContext<(R), (E)>
public "getId"(): $ResourceLocation
public static "lazy"<T>(arg0: $Supplier$$Type<(E)>): $NonNullSupplier<(E)>
public static "of"<T>(arg0: $Supplier$$Type<(E)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(E)>
public static "of"<T>(arg0: $Supplier$$Type<(E)>): $NonNullSupplier<(E)>
get "entry"(): E
get "name"(): StringJS
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataGenContext$$Type<R, E> = ($DataGenContext<(R), (E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataGenContext$$Original<R, E> = $DataGenContext<(R), (E)>;}
declare module "com.tterrag.registrate.providers.RegistrateLangProvider" {
import {$RegistrateProvider$$Interface} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List$$Type} from "java.util.List"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"
import {$LanguageProvider} from "net.neoforged.neoforge.common.data.LanguageProvider"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegistrateLangProvider extends $LanguageProvider implements $RegistrateProvider$$Interface {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $PackOutput$$Type)

public "getAutomaticName"<T>(arg0: $NonNullSupplier$$Type<(T)>, arg1: $ResourceKey$$Type<($Registry<(T)>)>): StringJS
public static "toEnglishName"(arg0: StringJS): StringJS
public "addBlock"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): void
public "addTooltip"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: StringJS): void
public "addTooltip"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: $List$$Type<(StringJS)>): void
public "addEntityType"(arg0: $NonNullSupplier$$Type<($EntityType$$Type<(never)>)>): void
public "addBlockWithTooltip"(arg0: $NonNullSupplier$$Type<($Block$$Type)>, arg1: StringJS, arg2: StringJS): void
public "addBlockWithTooltip"(arg0: $NonNullSupplier$$Type<($Block$$Type)>, arg1: StringJS): void
public "addItemWithTooltip"(arg0: $NonNullSupplier$$Type<($Item$$Type)>, arg1: StringJS, arg2: $List$$Type<(StringJS)>): void
public "addItem"(arg0: $NonNullSupplier$$Type<($Item$$Type)>): void
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public "add"(arg0: $CreativeModeTab$$Type, arg1: StringJS): void
public "add"(arg0: StringJS, arg1: StringJS): void
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLangProvider$$Type = ($RegistrateLangProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrateLangProvider$$Original = $RegistrateLangProvider;}
