declare module "blusunrize.immersiveengineering.mixin.accessors.client.ChatComponentAccess" {
import {$List} from "java.util.List"
import {$GuiMessage} from "net.minecraft.client.GuiMessage"

export interface $ChatComponentAccess$$Interface {
get "allMessages"(): $List<($GuiMessage)>
}

export class $ChatComponentAccess implements $ChatComponentAccess$$Interface {
 "getAllMessages"(): $List<($GuiMessage)>
 "invokeRefreshTrimmedMessages"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponentAccess$$Type = ($ChatComponentAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponentAccess$$Original = $ChatComponentAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.BETypeAccess" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $BETypeAccess$$Interface {

(): $Set$$Type<($Block$$Type)>
get "validBlocks"(): $Set<($Block)>
}

export class $BETypeAccess implements $BETypeAccess$$Interface {
 "getValidBlocks"(): $Set<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BETypeAccess$$Type = (() => $Set$$Type<($Block$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BETypeAccess$$Original = $BETypeAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.DataStorageAccess" {
import {$Map} from "java.util.Map"
import {$File} from "java.io.File"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"

export interface $DataStorageAccess$$Interface {
get "cache"(): $Map<(StringJS), ($SavedData)>
}

export class $DataStorageAccess implements $DataStorageAccess$$Interface {
 "invokeGetDataFile"(arg0: StringJS): $File
 "getCache"(): $Map<(StringJS), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataStorageAccess$$Type = ($DataStorageAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataStorageAccess$$Original = $DataStorageAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ContainerAccess" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $ContainerAccess$$Interface {
get "lastSlots"(): $NonNullList<($ItemStack)>
get "remoteSlots"(): $NonNullList<($ItemStack)>
}

export class $ContainerAccess implements $ContainerAccess$$Interface {
 "getLastSlots"(): $NonNullList<($ItemStack)>
 "getRemoteSlots"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerAccess$$Type = ($ContainerAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerAccess$$Original = $ContainerAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.TemplatePoolAccess" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$ObjectArrayList} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $TemplatePoolAccess$$Interface {
get "templates"(): $ObjectArrayList<($StructurePoolElement)>
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
set "rawTemplates"(value: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>)
}

export class $TemplatePoolAccess implements $TemplatePoolAccess$$Interface {
 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "setRawTemplates"(arg0: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplatePoolAccess$$Type = ($TemplatePoolAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplatePoolAccess$$Original = $TemplatePoolAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.ParticleManagerAccess" {
import {$Particle, $Particle$$Type} from "net.minecraft.client.particle.Particle"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $ParticleManagerAccess$$Interface {

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle$$Type
}

export class $ParticleManagerAccess implements $ParticleManagerAccess$$Interface {
 "invokeMakeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManagerAccess$$Type = ((arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double) => $Particle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleManagerAccess$$Original = $ParticleManagerAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.FurnaceTEAccess" {
import {$ContainerData} from "net.minecraft.world.inventory.ContainerData"
import {$RecipeManager$CachedCheck} from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export interface $FurnaceTEAccess$$Interface {
get "quickCheck"(): $RecipeManager$CachedCheck<($SingleRecipeInput), ($AbstractCookingRecipe)>
get "dataAccess"(): $ContainerData
}

export class $FurnaceTEAccess implements $FurnaceTEAccess$$Interface {
 "getQuickCheck"(): $RecipeManager$CachedCheck<($SingleRecipeInput), ($AbstractCookingRecipe)>
 "getDataAccess"(): $ContainerData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceTEAccess$$Type = ($FurnaceTEAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceTEAccess$$Original = $FurnaceTEAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ShapedPatternAccess" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ShapedRecipePattern$Data, $ShapedRecipePattern$Data$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern$Data"

export interface $ShapedPatternAccess$$Interface {

(): ($ShapedRecipePattern$Data$$Type)?
get "data"(): $Optional<($ShapedRecipePattern$Data)>
}

export class $ShapedPatternAccess implements $ShapedPatternAccess$$Interface {
 "getData"(): $Optional<($ShapedRecipePattern$Data)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedPatternAccess$$Type = (() => ($ShapedRecipePattern$Data$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedPatternAccess$$Original = $ShapedPatternAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.TemplateAccess" {
import {$StructureTemplate$Palette} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$List} from "java.util.List"

export interface $TemplateAccess$$Interface {
get "palettes"(): $List<($StructureTemplate$Palette)>
set "size"(value: $Vec3i$$Type)
}

export class $TemplateAccess implements $TemplateAccess$$Interface {
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "setSize"(arg0: $Vec3i$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateAccess$$Type = ($TemplateAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateAccess$$Original = $TemplateAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess$$Interface {

(arg0: integer): void
set "age"(value: integer)
}

export class $ItemEntityAccess implements $ItemEntityAccess$$Interface {
 "setAge"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccess$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntityAccess$$Original = $ItemEntityAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.GuiSubtitleOverlayAccess" {
import {$SubtitleOverlay, $SubtitleOverlay$$Type} from "net.minecraft.client.gui.components.SubtitleOverlay"

export interface $GuiSubtitleOverlayAccess$$Interface {

(): $SubtitleOverlay$$Type
get "subtitleOverlay"(): $SubtitleOverlay
}

export class $GuiSubtitleOverlayAccess implements $GuiSubtitleOverlayAccess$$Interface {
 "getSubtitleOverlay"(): $SubtitleOverlay
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSubtitleOverlayAccess$$Type = (() => $SubtitleOverlay$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSubtitleOverlayAccess$$Original = $GuiSubtitleOverlayAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.TNTEntityAccess" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $TNTEntityAccess$$Interface {

(arg0: $LivingEntity): void
set "owner"(value: $LivingEntity$$Type)
}

export class $TNTEntityAccess implements $TNTEntityAccess$$Interface {
 "setOwner"(arg0: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TNTEntityAccess$$Type = ((arg0: $LivingEntity) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TNTEntityAccess$$Original = $TNTEntityAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.CompiledSectionAccess" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $CompiledSectionAccess$$Interface {

(): $Set$$Type<($RenderType$$Type)>
get "hasBlocks"(): $Set<($RenderType)>
}

export class $CompiledSectionAccess implements $CompiledSectionAccess$$Interface {
 "getHasBlocks"(): $Set<($RenderType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledSectionAccess$$Type = (() => $Set$$Type<($RenderType$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompiledSectionAccess$$Original = $CompiledSectionAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ConcretePowderBlockAccess" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $ConcretePowderBlockAccess$$Interface {

(): $Block$$Type
get "concrete"(): $Block
}

export class $ConcretePowderBlockAccess implements $ConcretePowderBlockAccess$$Interface {
 "getConcrete"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcretePowderBlockAccess$$Type = (() => $Block$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcretePowderBlockAccess$$Original = $ConcretePowderBlockAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ExplosionAccess" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List$$Type} from "java.util.List"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ExplosionAccess$$Interface {
}

export class $ExplosionAccess implements $ExplosionAccess$$Interface {
static "callAddOrAppendStack"(arg0: $List$$Type<($Pair$$Type<($ItemStack$$Type), ($BlockPos$$Type)>)>, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionAccess$$Type = ($ExplosionAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionAccess$$Original = $ExplosionAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.RenderTypeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccess$$Interface {

(): StringJS
get "name"(): StringJS
}

export class $RenderTypeAccess implements $RenderTypeAccess$$Interface {
 "getName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccess$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeAccess$$Original = $RenderTypeAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.PaletteAccess" {
import {$StructureTemplate$Palette} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$List$$Type} from "java.util.List"
import {$StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"

export interface $PaletteAccess$$Interface {
}

export class $PaletteAccess implements $PaletteAccess$$Interface {
static "construct"(arg0: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>): $StructureTemplate$Palette
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteAccess$$Type = ($PaletteAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaletteAccess$$Original = $PaletteAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.DamageSourcesAccess" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"

export interface $DamageSourcesAccess$$Interface {

(arg0: $ResourceKey<($DamageType)>, arg1: $Entity, arg2: $Entity): $DamageSource$$Type
}

export class $DamageSourcesAccess implements $DamageSourcesAccess$$Interface {
 "invokeSource"(arg0: $ResourceKey$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcesAccess$$Type = ((arg0: $ResourceKey<($DamageType)>, arg1: $Entity, arg2: $Entity) => $DamageSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSourcesAccess$$Original = $DamageSourcesAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.BaseContainerBEAccess" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $BaseContainerBEAccess$$Interface {

(arg0: $Component): void
set "name"(value: $Component$$Type)
}

export class $BaseContainerBEAccess implements $BaseContainerBEAccess$$Interface {
 "setName"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerBEAccess$$Type = ((arg0: $Component) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseContainerBEAccess$$Original = $BaseContainerBEAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.PotionBrewingAccess" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$List, $List$$Type} from "java.util.List"
import {$PotionMixAccess, $PotionMixAccess$$Type} from "blusunrize.immersiveengineering.mixin.accessors.PotionMixAccess"

export interface $PotionBrewingAccess$$Interface {

(): $List$$Type<($PotionMixAccess$$Type<($Potion$$Type)>)>
get "conversions"(): $List<($PotionMixAccess<($Potion)>)>
}

export class $PotionBrewingAccess implements $PotionBrewingAccess$$Interface {
 "getConversions"(): $List<($PotionMixAccess<($Potion)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingAccess$$Type = (() => $List$$Type<($PotionMixAccess$$Type<($Potion$$Type)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewingAccess$$Original = $PotionBrewingAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.CropBlockAccess" {
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"

export interface $CropBlockAccess$$Interface {

(): $IntegerProperty$$Type
}

export class $CropBlockAccess implements $CropBlockAccess$$Interface {
 "invokeGetAgeProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockAccess$$Type = (() => $IntegerProperty$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CropBlockAccess$$Original = $CropBlockAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.AbstractArrowAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractArrowAccess$$Interface {

(arg0: byte): void
}

export class $AbstractArrowAccess implements $AbstractArrowAccess$$Interface {
 "invokeSetPierceLevel"(arg0: byte): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractArrowAccess$$Type = ((arg0: byte) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractArrowAccess$$Original = $AbstractArrowAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.WorldRendererAccess" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $WorldRendererAccess$$Interface {

(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: double, arg4: double, arg5: double, arg6: $BlockPos, arg7: $BlockState): void
}

export class $WorldRendererAccess implements $WorldRendererAccess$$Interface {
 "callRenderHitOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$$Type, arg7: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccess$$Type = ((arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Entity, arg3: double, arg4: double, arg5: double, arg6: $BlockPos, arg7: $BlockState) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldRendererAccess$$Original = $WorldRendererAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.MinecraftAccess" {
import {$FontManager, $FontManager$$Type} from "net.minecraft.client.gui.font.FontManager"

export interface $MinecraftAccess$$Interface {

(): $FontManager$$Type
get "fontManager"(): $FontManager
}

export class $MinecraftAccess implements $MinecraftAccess$$Interface {
 "getFontManager"(): $FontManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccess$$Type = (() => $FontManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftAccess$$Original = $MinecraftAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.FontResourceManagerAccess" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $FontResourceManagerAccess$$Interface {

(): $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>
get "fontSets"(): $Map<($ResourceLocation), ($FontSet)>
}

export class $FontResourceManagerAccess implements $FontResourceManagerAccess$$Interface {
 "getFontSets"(): $Map<($ResourceLocation), ($FontSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontResourceManagerAccess$$Type = (() => $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontResourceManagerAccess$$Original = $FontResourceManagerAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ServerPlayNetHandlerAccess" {
import {$PlayerUtils$ConnectionAccess$$Interface} from "blusunrize.immersiveengineering.api.utils.PlayerUtils$ConnectionAccess"

export interface $ServerPlayNetHandlerAccess$$Interface extends $PlayerUtils$ConnectionAccess$$Interface {
set "clientIsFloating"(value: boolean)
set "aboveGroundTickCount"(value: integer)
}

export class $ServerPlayNetHandlerAccess implements $ServerPlayNetHandlerAccess$$Interface {
 "setClientIsFloating"(arg0: boolean): void
 "setAboveGroundTickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayNetHandlerAccess$$Type = ($ServerPlayNetHandlerAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayNetHandlerAccess$$Original = $ServerPlayNetHandlerAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.ShapedRecipeAccess" {
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"

export interface $ShapedRecipeAccess$$Interface {

(): $ShapedRecipePattern$$Type
get "pattern"(): $ShapedRecipePattern
}

export class $ShapedRecipeAccess implements $ShapedRecipeAccess$$Interface {
 "getPattern"(): $ShapedRecipePattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccess$$Type = (() => $ShapedRecipePattern$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipeAccess$$Original = $ShapedRecipeAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.PotionMixAccess" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Holder} from "net.minecraft.core.Holder"

export interface $PotionMixAccess$$Interface<T> {
get "ingredient"(): $Ingredient
get "from"(): $Holder<(T)>
get "to"(): $Holder<(T)>
}

export class $PotionMixAccess<T> implements $PotionMixAccess$$Interface {
 "getIngredient"(): $Ingredient
 "getFrom"(): $Holder<(T)>
 "getTo"(): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionMixAccess$$Type<T> = ($PotionMixAccess<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionMixAccess$$Original<T> = $PotionMixAccess<(T)>;}
declare module "blusunrize.immersiveengineering.mixin.accessors.FlowingFluidAccess" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FlowingFluidAccess$$Interface {

(arg0: $Direction, arg1: $BlockGetter, arg2: $BlockPos, arg3: $BlockState, arg4: $BlockPos, arg5: $BlockState): boolean
}

export class $FlowingFluidAccess implements $FlowingFluidAccess$$Interface {
 "callCanPassThroughWall"(arg0: $Direction$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type, arg5: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidAccess$$Type = ((arg0: $Direction, arg1: $BlockGetter, arg2: $BlockPos, arg3: $BlockState, arg4: $BlockPos, arg5: $BlockState) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowingFluidAccess$$Original = $FlowingFluidAccess;}
declare module "blusunrize.immersiveengineering.mixin.accessors.client.PlayerControllerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerControllerAccess$$Interface {

(): float
get "destroyProgress"(): float
}

export class $PlayerControllerAccess implements $PlayerControllerAccess$$Interface {
 "getDestroyProgress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerControllerAccess$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerControllerAccess$$Original = $PlayerControllerAccess;}
