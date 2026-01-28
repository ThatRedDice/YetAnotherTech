declare module "net.minecraft.client.gui.navigation.ScreenDirection" {
import {$Enum} from "java.lang.Enum"
import {$IntComparator} from "it.unimi.dsi.fastutil.ints.IntComparator"
import {$ScreenAxis} from "net.minecraft.client.gui.navigation.ScreenAxis"

export class $ScreenDirection extends $Enum<($ScreenDirection)> {
static readonly "DOWN": $ScreenDirection
static readonly "LEFT": $ScreenDirection
static readonly "RIGHT": $ScreenDirection
static readonly "UP": $ScreenDirection

public "isPositive"(): boolean
public "isAfter"(arg0: integer, arg1: integer): boolean
public "isBefore"(arg0: integer, arg1: integer): boolean
public static "values"(): ($ScreenDirection)[]
public static "valueOf"(arg0: StringJS): $ScreenDirection
public "getOpposite"(): $ScreenDirection
public "getAxis"(): $ScreenAxis
public "coordinateValueComparator"(): $IntComparator
get "positive"(): boolean
get "opposite"(): $ScreenDirection
get "axis"(): $ScreenAxis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDirection$$Type = (("up") | ("down") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenDirection$$Original = $ScreenDirection;}
declare module "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason" {
import {$Enum} from "java.lang.Enum"

export class $ReceivingLevelScreen$Reason extends $Enum<($ReceivingLevelScreen$Reason)> {
static readonly "OTHER": $ReceivingLevelScreen$Reason
static readonly "NETHER_PORTAL": $ReceivingLevelScreen$Reason
static readonly "END_PORTAL": $ReceivingLevelScreen$Reason

public static "values"(): ($ReceivingLevelScreen$Reason)[]
public static "valueOf"(arg0: StringJS): $ReceivingLevelScreen$Reason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReceivingLevelScreen$Reason$$Type = (("nether_portal") | ("end_portal") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReceivingLevelScreen$Reason$$Original = $ReceivingLevelScreen$Reason;}
declare module "net.minecraft.client.gui.screens.recipebook.RecipeCollection" {
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeBook$$Type} from "net.minecraft.stats.RecipeBook"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RecipeCollection {
constructor(arg0: $RegistryAccess$$Type, arg1: $List$$Type<($RecipeHolder$$Type<(never)>)>)

public "getDisplayRecipes"(arg0: boolean): $List<($RecipeHolder<(never)>)>
public "hasSingleResultItem"(): boolean
public "updateKnownRecipes"(arg0: $RecipeBook$$Type): void
public "getRecipes"(): $List<($RecipeHolder<(never)>)>
public "getRecipes"(arg0: boolean): $List<($RecipeHolder<(never)>)>
public "canCraft"(arg0: $StackedContents$$Type, arg1: integer, arg2: integer, arg3: $RecipeBook$$Type): void
public "isCraftable"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "registryAccess"(): $RegistryAccess
public "hasCraftable"(): boolean
public "hasFitting"(): boolean
public "hasKnownRecipes"(): boolean
get "recipes"(): $List<($RecipeHolder<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCollection$$Type = ($RecipeCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCollection$$Original = $RecipeCollection;}
declare module "net.minecraft.client.gui.spectator.categories.SpectatorPage" {
import {$SpectatorMenuItem, $SpectatorMenuItem$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$List$$Type} from "java.util.List"

export class $SpectatorPage {
static readonly "NO_SELECTION": integer

constructor(arg0: $List$$Type<($SpectatorMenuItem$$Type)>, arg1: integer)

public "getSelectedSlot"(): integer
public "getItem"(arg0: integer): $SpectatorMenuItem
get "selectedSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorPage$$Type = ($SpectatorPage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorPage$$Original = $SpectatorPage;}
declare module "net.minecraft.client.gui.components.toasts.ToastComponent$ToastInstance" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast} from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastComponent$ToastInstance<T extends $Toast> {
public "render"(arg0: integer, arg1: $GuiGraphics$$Type): boolean
public "getToast"(): T
get "toast"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToastComponent$ToastInstance$$Type<T> = ($ToastComponent$ToastInstance<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToastComponent$ToastInstance$$Original<T> = $ToastComponent$ToastInstance<(T)>;}
declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph" {
import {$BakedGlyph$Effect$$Type} from "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect"
import {$GlyphRenderTypes$$Type} from "net.minecraft.client.gui.font.GlyphRenderTypes"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $BakedGlyph {
constructor(arg0: $GlyphRenderTypes$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

public "render"(arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer): void
public "renderType"(arg0: $Font$DisplayMode$$Type): $RenderType
public "renderEffect"(arg0: $BakedGlyph$Effect$$Type, arg1: $Matrix4f$$Type, arg2: $VertexConsumer$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyph$$Type = ($BakedGlyph);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyph$$Original = $BakedGlyph;}
declare module "net.minecraft.client.gui.narration.NarratableEntry" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$TabOrderedElement$$Interface} from "net.minecraft.client.gui.components.TabOrderedElement"
import {$NarrationSupplier$$Interface} from "net.minecraft.client.gui.narration.NarrationSupplier"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export interface $NarratableEntry$$Interface extends $TabOrderedElement$$Interface, $NarrationSupplier$$Interface {
get "active"(): boolean
get "tabOrderGroup"(): integer
}

export class $NarratableEntry implements $NarratableEntry$$Interface {
 "isActive"(): boolean
 "narrationPriority"(): $NarratableEntry$NarrationPriority
 "getTabOrderGroup"(): integer
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratableEntry$$Type = ($NarratableEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratableEntry$$Original = $NarratableEntry;}
declare module "net.minecraft.client.gui.Gui" {
import {$BossHealthOverlay} from "net.minecraft.client.gui.components.BossHealthOverlay"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerTabOverlay} from "net.minecraft.client.gui.components.PlayerTabOverlay"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$GuiSubtitleOverlayAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.GuiSubtitleOverlayAccess"
import {$ChatComponent} from "net.minecraft.client.gui.components.ChatComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$GuiAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.GuiAccessor"
import {$SubtitleOverlay} from "net.minecraft.client.gui.components.SubtitleOverlay"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$IMixinGui$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGui"
import {$SpectatorGui} from "net.minecraft.client.gui.components.spectator.SpectatorGui"

export class $Gui implements $GuiSubtitleOverlayAccess$$Interface, $IMixinGui$$Interface, $GuiAccessor$$Interface {
static readonly "SPYGLASS_SCOPE_LOCATION": $ResourceLocation
 "vignetteBrightness": float
 "rightHeight": integer
 "leftHeight": integer

constructor(arg0: $Minecraft$$Type)

public "handler$dla000$journeymap$renderPre"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type, arg2: $CallbackInfo$$Type): void
public "get_title_FancyMenu"(): $Component
public "get_subtitle_FancyMenu"(): $Component
public "create$getSubtitleOverlay"(): $SubtitleOverlay
public "create$renderTextureOverlay"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: float): void
public "wrapMethod$bpk000$oculus$iris$handleHudHidingScreens"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type, arg2: $Operation$$Type): void
public "handler$dol000$ftbchunks$onRenderEffectsEnter"(guiGraphics: $GuiGraphics$$Type, deltaTracker: $DeltaTracker$$Type, info: $CallbackInfo$$Type): void
public "handler$dol000$ftbchunks$onRenderEffectsReturn"(guiGraphics: $GuiGraphics$$Type, deltaTracker: $DeltaTracker$$Type, info: $CallbackInfo$$Type): void
public "resetTitleTimes"(): void
public "setSubtitle"(arg0: $Component$$Type): void
public "renderSelectedItemName"(arg0: $GuiGraphics$$Type, arg1: integer): void
public "handler$ejl000$irons_spellbooks$disableXpBar"(arg0: $CallbackInfoReturnable$$Type): void
public "handler$fca003$betterf3$init"(info: $CallbackInfo$$Type): void
public "constant$ede000$apotheosis$apoth_extendTime"(arg0: integer): integer
public "initModdedOverlays"(): void
public "getLayerCount"(): integer
public "create$getToolHighlightTimer"(): integer
public "getSubtitleOverlay"(): $SubtitleOverlay
public "tick"(arg0: boolean): void
public "setTimes"(arg0: integer, arg1: integer, arg2: integer): void
public "clearCache"(): void
public "clear"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
public "renderSavingIndicator"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
public "setNowPlaying"(arg0: $Component$$Type): void
public "getFont"(): $Font
public "setTitle"(arg0: $Component$$Type): void
public "getDebugOverlay"(): $DebugScreenOverlay
public "isShowingChatDisabledByPlayer"(): boolean
public "setChatDisabledByPlayerShown"(arg0: boolean): void
public "setOverlayMessage"(arg0: $Component$$Type, arg1: boolean): void
public "getSpectatorGui"(): $SpectatorGui
public "onDisconnected"(): void
public "getBossOverlay"(): $BossHealthOverlay
public "getChat"(): $ChatComponent
public "getGuiTicks"(): integer
public "getTabList"(): $PlayerTabOverlay
get "_title_FancyMenu"(): $Component
get "_subtitle_FancyMenu"(): $Component
set "subtitle"(value: $Component$$Type)
get "layerCount"(): integer
get "subtitleOverlay"(): $SubtitleOverlay
set "nowPlaying"(value: $Component$$Type)
get "font"(): $Font
set "title"(value: $Component$$Type)
get "debugOverlay"(): $DebugScreenOverlay
get "showingChatDisabledByPlayer"(): boolean
set "chatDisabledByPlayerShown"(value: boolean)
get "spectatorGui"(): $SpectatorGui
get "bossOverlay"(): $BossHealthOverlay
get "chat"(): $ChatComponent
get "guiTicks"(): integer
get "tabList"(): $PlayerTabOverlay
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gui$$Type = ($Gui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gui$$Original = $Gui;}
declare module "net.minecraft.client.gui.components.DebugScreenOverlay$AllocationRateCalculator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugScreenOverlay$AllocationRateCalculator {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugScreenOverlay$AllocationRateCalculator$$Type = ($DebugScreenOverlay$AllocationRateCalculator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugScreenOverlay$AllocationRateCalculator$$Original = $DebugScreenOverlay$AllocationRateCalculator;}
declare module "net.minecraft.client.gui.components.events.ContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$$Type, $GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Optional} from "java.util.Optional"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $ContainerEventHandler$$Interface extends $GuiEventListener$$Interface {
get "dragging"(): boolean
set "dragging"(value: boolean)
get "focused"(): $GuiEventListener
set "focused"(value: $GuiEventListener$$Type)
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export class $ContainerEventHandler implements $ContainerEventHandler$$Interface {
 "children"(): $List<($GuiEventListener)>
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "isDragging"(): boolean
 "setDragging"(arg0: boolean): void
 "getFocused"(): $GuiEventListener
 "setFocused"(arg0: $GuiEventListener$$Type): void
 "setFocused"(arg0: boolean): void
 "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getCurrentFocusPath"(): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "mouseMoved"(arg0: double, arg1: double): void
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerEventHandler$$Type = ($ContainerEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerEventHandler$$Original = $ContainerEventHandler;}
declare module "net.minecraft.client.gui.components.CycleButton$ValueListSupplier" {
import {$Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export interface $CycleButton$ValueListSupplier$$Interface<T> {
get "defaultList"(): $List<(T)>
get "selectedList"(): $List<(T)>
}

export class $CycleButton$ValueListSupplier<T> implements $CycleButton$ValueListSupplier$$Interface {
 "getDefaultList"(): $List<(T)>
static "create"<T>(arg0: $BooleanSupplier$$Type, arg1: $List$$Type<(T)>, arg2: $List$$Type<(T)>): $CycleButton$ValueListSupplier<(T)>
static "create"<T>(arg0: $Collection$$Type<(T)>): $CycleButton$ValueListSupplier<(T)>
 "getSelectedList"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CycleButton$ValueListSupplier$$Type<T> = ($CycleButton$ValueListSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CycleButton$ValueListSupplier$$Original<T> = $CycleButton$ValueListSupplier<(T)>;}
declare module "net.minecraft.client.gui.components.ChatComponent" {
import {$ChatComponentAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.ChatComponentAccess"
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ChatComponent$State, $ChatComponent$State$$Type} from "net.minecraft.client.gui.components.ChatComponent$State"
import {$List} from "java.util.List"
import {$Style} from "net.minecraft.network.chat.Style"
import {$ArrayListDeque} from "net.minecraft.util.ArrayListDeque"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$GuiMessage} from "net.minecraft.client.GuiMessage"

export class $ChatComponent implements $ChatComponentAccess$$Interface {
readonly "allMessages": $List<($GuiMessage)>

constructor(arg0: $Minecraft$$Type)

public "tick"(): void
public static "getWidth"(arg0: double): integer
public "getWidth"(): integer
public "getHeight"(): integer
public static "getHeight"(arg0: double): integer
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "addMessage"(arg0: $Component$$Type, arg1: $MessageSignature$$Type, arg2: $GuiMessageTag$$Type): void
public "addMessage"(arg0: $Component$$Type): void
public "restoreState"(arg0: $ChatComponent$State$$Type): void
public static "defaultUnfocusedPct"(): double
public "rescaleChat"(): void
public "clearMessages"(arg0: boolean): void
public "constant$zci000$placebo$unEscapeChatLogNewlines"(arg0: StringJS): StringJS
public "isChatFocused"(): boolean
public "deleteMessage"(arg0: $MessageSignature$$Type): void
public "storeState"(): $ChatComponent$State
public "getAllMessages"(): $List
public "invokeRefreshTrimmedMessages"(): void
public "getScale"(): double
public "resetChatScroll"(): void
public "getRecentChat"(): $ArrayListDeque<(StringJS)>
public "getLinesPerPage"(): integer
public "scrollChat"(arg0: integer): void
public "handleChatQueueClicked"(arg0: double, arg1: double): boolean
public "getMessageTagAt"(arg0: double, arg1: double): $GuiMessageTag
public "getClickedComponentStyleAt"(arg0: double, arg1: double): $Style
public "addRecentChat"(arg0: StringJS): void
get "width"(): integer
get "height"(): integer
get "chatFocused"(): boolean
get "scale"(): double
get "recentChat"(): $ArrayListDeque<(StringJS)>
get "linesPerPage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$$Type = ($ChatComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$$Original = $ChatComponent;}
declare module "net.minecraft.client.gui.components.toasts.Toast$Visibility" {
import {$Enum} from "java.lang.Enum"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"

export class $Toast$Visibility extends $Enum<($Toast$Visibility)> {
static readonly "HIDE": $Toast$Visibility
static readonly "SHOW": $Toast$Visibility

public static "values"(): ($Toast$Visibility)[]
public static "valueOf"(arg0: StringJS): $Toast$Visibility
public "playSound"(arg0: $SoundManager$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toast$Visibility$$Type = (("show") | ("hide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Toast$Visibility$$Original = $Toast$Visibility;}
declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BakedGlyph$Effect {
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyph$Effect$$Type = ($BakedGlyph$Effect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyph$Effect$$Original = $BakedGlyph$Effect;}
declare module "net.minecraft.client.gui.components.Tooltip" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$TooltipAccess$$Interface} from "me.desht.pneumaticcraft.mixin.accessors.TooltipAccess"
import {$List} from "java.util.List"
import {$NarrationSupplier$$Interface} from "net.minecraft.client.gui.narration.NarrationSupplier"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Tooltip implements $NarrationSupplier$$Interface, $TooltipAccess$$Interface {
constructor(arg0: $Component$$Type, arg1: $Component$$Type)

public "getMessage"(): $Component
public static "create"(arg0: $Component$$Type): $Tooltip
public static "create"(arg0: $Component$$Type, arg1: $Component$$Type): $Tooltip
public "toCharSequence"(arg0: $Minecraft$$Type): $List<($FormattedCharSequence)>
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
public static "splitTooltip"(arg0: $Minecraft$$Type, arg1: $Component$$Type): $List<($FormattedCharSequence)>
get "message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$$Type = ($Tooltip);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tooltip$$Original = $Tooltip;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows" {
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$LevelSettings, $LevelSettings$$Type} from "net.minecraft.world.level.LevelSettings"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"
import {$WorldCreationContext} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldStem} from "net.minecraft.server.WorldStem"
import {$LevelStorageSource$$Type} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$WorldData$$Type} from "net.minecraft.world.level.storage.WorldData"
import {$CreateWorldScreen$$Type} from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WorldOpenFlows {
constructor(arg0: $Minecraft$$Type, arg1: $LevelStorageSource$$Type)

public "createLevelFromExistingSettings"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $ReloadableServerResources$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $WorldData$$Type): void
public "loadWorldStem"(arg0: $Dynamic$$Type<(never)>, arg1: boolean, arg2: $PackRepository$$Type): $WorldStem
public "recreateWorldData"(arg0: $LevelStorageSource$LevelStorageAccess$$Type): $Pair<($LevelSettings), ($WorldCreationContext)>
public static "confirmWorldCreation"(arg0: $Minecraft$$Type, arg1: $CreateWorldScreen$$Type, arg2: $Lifecycle$$Type, arg3: $Runnable$$Type, arg4: boolean): void
public "openWorld"(arg0: StringJS, arg1: $Runnable$$Type): void
public "createFreshLevel"(arg0: StringJS, arg1: $LevelSettings$$Type, arg2: $WorldOptions$$Type, arg3: $Function$$Type<($RegistryAccess), ($WorldDimensions$$Type)>, arg4: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldOpenFlows$$Type = ($WorldOpenFlows);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldOpenFlows$$Original = $WorldOpenFlows;}
declare module "net.minecraft.client.gui.font.FontOption" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FontOption extends $Enum<($FontOption)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($FontOption)>
static readonly "UNIFORM": $FontOption
static readonly "JAPANESE_VARIANTS": $FontOption

public static "values"(): ($FontOption)[]
public static "valueOf"(arg0: StringJS): $FontOption
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontOption$$Type = (("uniform") | ("jp"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontOption$$Original = $FontOption;}
declare module "net.minecraft.client.gui.components.PlayerTabOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$Gui$$Type} from "net.minecraft.client.gui.Gui"

export class $PlayerTabOverlay {
static readonly "MAX_ROWS_PER_COL": integer
 "visible": boolean

constructor(arg0: $Minecraft$$Type, arg1: $Gui$$Type)

public "setHeader"(arg0: $Component$$Type): void
public "setFooter"(arg0: $Component$$Type): void
public "reset"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: $Scoreboard$$Type, arg3: $Objective$$Type): void
public "setVisible"(arg0: boolean): void
public "getNameForDisplay"(arg0: $PlayerInfo$$Type): $Component
set "header"(value: $Component$$Type)
set "footer"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTabOverlay$$Type = ($PlayerTabOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTabOverlay$$Original = $PlayerTabOverlay;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuItem" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuItem$$Interface {
get "name"(): $Component
get "enabled"(): boolean
}

export class $SpectatorMenuItem implements $SpectatorMenuItem$$Interface {
 "getName"(): $Component
 "isEnabled"(): boolean
 "selectItem"(arg0: $SpectatorMenu$$Type): void
 "renderIcon"(arg0: $GuiGraphics$$Type, arg1: float, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuItem$$Type = ($SpectatorMenuItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuItem$$Original = $SpectatorMenuItem;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent" {
import {$ScreenDirection, $ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export interface $FocusNavigationEvent$$Interface {

(): $ScreenDirection$$Type
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}

export class $FocusNavigationEvent implements $FocusNavigationEvent$$Interface {
 "getVerticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$$Type = (() => $ScreenDirection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$$Original = $FocusNavigationEvent;}
declare module "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority" {
import {$Enum} from "java.lang.Enum"

export class $NarratableEntry$NarrationPriority extends $Enum<($NarratableEntry$NarrationPriority)> {
static readonly "HOVERED": $NarratableEntry$NarrationPriority
static readonly "NONE": $NarratableEntry$NarrationPriority
static readonly "FOCUSED": $NarratableEntry$NarrationPriority

public "isTerminal"(): boolean
public static "values"(): ($NarratableEntry$NarrationPriority)[]
public static "valueOf"(arg0: StringJS): $NarratableEntry$NarrationPriority
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratableEntry$NarrationPriority$$Type = (("none") | ("hovered") | ("focused"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratableEntry$NarrationPriority$$Original = $NarratableEntry$NarrationPriority;}
declare module "net.minecraft.client.gui.components.Renderable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $Renderable$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float): void
}

export class $Renderable implements $Renderable$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Renderable$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Renderable$$Original = $Renderable;}
declare module "net.minecraft.client.gui.narration.NarratedElementType" {
import {$Enum} from "java.lang.Enum"

export class $NarratedElementType extends $Enum<($NarratedElementType)> {
static readonly "POSITION": $NarratedElementType
static readonly "USAGE": $NarratedElementType
static readonly "HINT": $NarratedElementType
static readonly "TITLE": $NarratedElementType

public static "values"(): ($NarratedElementType)[]
public static "valueOf"(arg0: StringJS): $NarratedElementType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratedElementType$$Type = (("title") | ("position") | ("hint") | ("usage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratedElementType$$Original = $NarratedElementType;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater" {
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldDimensions, $WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"

export interface $WorldCreationContext$DimensionsUpdater$$Interface extends $BiFunction$$Interface<($RegistryAccess$Frozen), ($WorldDimensions), ($WorldDimensions)> {

(arg0: $RegistryAccess$Frozen, arg1: $WorldDimensions): $WorldDimensions$$Type
}

export class $WorldCreationContext$DimensionsUpdater implements $WorldCreationContext$DimensionsUpdater$$Interface {
 "apply"(arg0: $RegistryAccess$Frozen$$Type, arg1: $WorldDimensions$$Type): $WorldDimensions
 "andThen"<V>(arg0: $Function$$Type<($WorldDimensions), (V)>): $BiFunction<($RegistryAccess$Frozen), ($WorldDimensions), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$DimensionsUpdater$$Type = ((arg0: $RegistryAccess$Frozen, arg1: $WorldDimensions) => $WorldDimensions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$DimensionsUpdater$$Original = $WorldCreationContext$DimensionsUpdater;}
declare module "net.minecraft.client.gui.Gui$HeartType" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $Gui$HeartType extends $Enum<($Gui$HeartType)> implements $IExtensibleEnum$$Interface {
static readonly "ABSORBING": $Gui$HeartType
static readonly "CONTAINER": $Gui$HeartType
static readonly "WITHERED": $Gui$HeartType
static readonly "POISIONED": $Gui$HeartType
static readonly "FROZEN": $Gui$HeartType
static readonly "NORMAL": $Gui$HeartType

public static "values"(): ($Gui$HeartType)[]
public static "valueOf"(arg0: StringJS): $Gui$HeartType
public static "getExtensionInfo"(): $ExtensionInfo
public "getSprite"(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation
public static get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gui$HeartType$$Type = (("container") | ("normal") | ("poisioned") | ("withered") | ("absorbing") | ("frozen"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gui$HeartType$$Original = $Gui$HeartType;}
declare module "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering" {
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$List, $List$$Type} from "java.util.List"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Record} from "java.lang.Record"

export class $Screen$DeferredTooltipRendering extends $Record {
constructor(tooltip: $List$$Type<($FormattedCharSequence$$Type)>, positioner: $ClientTooltipPositioner$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "positioner"(): $ClientTooltipPositioner
public "tooltip"(): $List<($FormattedCharSequence)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$DeferredTooltipRendering$$Type = ({"positioner"?: $ClientTooltipPositioner$$Type, "tooltip"?: $List$$Type<($FormattedCharSequence$$Type)>}) | ([positioner?: $ClientTooltipPositioner$$Type, tooltip?: $List$$Type<($FormattedCharSequence$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$DeferredTooltipRendering$$Original = $Screen$DeferredTooltipRendering;}
declare module "net.minecraft.client.gui.narration.NarrationElementOutput" {
import {$NarrationThunk$$Type} from "net.minecraft.client.gui.narration.NarrationThunk"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NarratedElementType$$Type} from "net.minecraft.client.gui.narration.NarratedElementType"

export interface $NarrationElementOutput$$Interface {
}

export class $NarrationElementOutput implements $NarrationElementOutput$$Interface {
 "add"(arg0: $NarratedElementType$$Type, arg1: $NarrationThunk$$Type<(never)>): void
 "add"(arg0: $NarratedElementType$$Type, ...arg1: ($Component$$Type)[]): void
 "add"(arg0: $NarratedElementType$$Type, arg1: StringJS): void
 "add"(arg0: $NarratedElementType$$Type, arg1: $Component$$Type): void
 "nest"(): $NarrationElementOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationElementOutput$$Type = ($NarrationElementOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationElementOutput$$Original = $NarrationElementOutput;}
declare module "net.minecraft.client.gui.font.GlyphRenderTypes" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Record} from "java.lang.Record"

export class $GlyphRenderTypes extends $Record {
constructor(arg0: $RenderType$$Type, arg1: $RenderType$$Type, arg2: $RenderType$$Type)

public "normal"(): $RenderType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "select"(arg0: $Font$DisplayMode$$Type): $RenderType
public "polygonOffset"(): $RenderType
public "seeThrough"(): $RenderType
public static "createForColorTexture"(arg0: $ResourceLocation$$Type): $GlyphRenderTypes
public static "createForIntensityTexture"(arg0: $ResourceLocation$$Type): $GlyphRenderTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphRenderTypes$$Type = ({"polygonOffset"?: $RenderType$$Type, "seeThrough"?: $RenderType$$Type, "normal"?: $RenderType$$Type}) | ([polygonOffset?: $RenderType$$Type, seeThrough?: $RenderType$$Type, normal?: $RenderType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphRenderTypes$$Original = $GlyphRenderTypes;}
declare module "net.minecraft.client.gui.narration.NarrationSupplier" {
import {$NarrationElementOutput, $NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"

export interface $NarrationSupplier$$Interface {

(arg0: $NarrationElementOutput): void
}

export class $NarrationSupplier implements $NarrationSupplier$$Interface {
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationSupplier$$Type = ((arg0: $NarrationElementOutput) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationSupplier$$Original = $NarrationSupplier;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry" {
import {$WorldPreset, $WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $WorldCreationUiState$WorldTypeEntry extends $Record {
constructor(preset: $Holder$$Type<($WorldPreset)>)

public "describePreset"(): $Component
public "isAmplified"(): boolean
public "preset"(): $Holder<($WorldPreset)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "amplified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$WorldTypeEntry$$Type = ({"preset"?: $Holder$$Type<($WorldPreset)>}) | ([preset?: $Holder$$Type<($WorldPreset)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$WorldTypeEntry$$Original = $WorldCreationUiState$WorldTypeEntry;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuListener" {
import {$SpectatorMenu, $SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuListener$$Interface {

(arg0: $SpectatorMenu): void
}

export class $SpectatorMenuListener implements $SpectatorMenuListener$$Interface {
 "onSpectatorMenuClosed"(arg0: $SpectatorMenu$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuListener$$Type = ((arg0: $SpectatorMenu) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuListener$$Original = $SpectatorMenuListener;}
declare module "net.minecraft.client.gui.components.Button$OnPress" {
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $Button$OnPress$$Interface {

(arg0: $Button): void
}

export class $Button$OnPress implements $Button$OnPress$$Interface {
 "onPress"(arg0: $Button$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$OnPress$$Type = ((arg0: $Button) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$OnPress$$Original = $Button$OnPress;}
declare module "net.minecraft.client.gui.components.LerpingBossEvent" {
import {$BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$UUID$$Type} from "java.util.UUID"
import {$BossEvent} from "net.minecraft.world.BossEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $LerpingBossEvent extends $BossEvent {
constructor(arg0: $UUID$$Type, arg1: $Component$$Type, arg2: float, arg3: $BossEvent$BossBarColor$$Type, arg4: $BossEvent$BossBarOverlay$$Type, arg5: boolean, arg6: boolean, arg7: boolean)

public "getProgress"(): float
public "setProgress"(arg0: float): void
get "progress"(): float
set "progress"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpingBossEvent$$Type = ($LerpingBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LerpingBossEvent$$Original = $LerpingBossEvent;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState" {
import {$Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$OptionalLong$$Type} from "java.util.OptionalLong"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$WorldCreationContext$DimensionsUpdater$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GameRules, $GameRules$$Type} from "net.minecraft.world.level.GameRules"
import {$WorldCreationUiState$SelectedGameMode, $WorldCreationUiState$SelectedGameMode$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode"
import {$WorldCreationContext, $WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$WorldCreationUiState$WorldTypeEntry, $WorldCreationUiState$WorldTypeEntry$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry"
import {$WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$PresetEditor} from "net.minecraft.client.gui.screens.worldselection.PresetEditor"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"

export class $WorldCreationUiState {
constructor(arg0: $Path$$Type, arg1: $WorldCreationContext$$Type, arg2: ($ResourceKey$$Type<($WorldPreset$$Type)>)?, arg3: $OptionalLong$$Type)

public "setGameMode"(arg0: $WorldCreationUiState$SelectedGameMode$$Type): void
public "onChanged"(): void
public "getWorldType"(): $WorldCreationUiState$WorldTypeEntry
public "isBonusChest"(): boolean
public "isGenerateStructures"(): boolean
public "setGenerateStructures"(arg0: boolean): void
public "setBonusChest"(arg0: boolean): void
public "setWorldType"(arg0: $WorldCreationUiState$WorldTypeEntry$$Type): void
public "getPresetEditor"(): $PresetEditor
public "getNormalPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
public "getAltPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
public "setGameRules"(arg0: $GameRules$$Type): void
public "setSettings"(arg0: $WorldCreationContext$$Type): void
public "getSettings"(): $WorldCreationContext
public "updateDimensions"(arg0: $WorldCreationContext$DimensionsUpdater$$Type): void
public "setSeed"(arg0: StringJS): void
public "getSeed"(): StringJS
public "getName"(): StringJS
public "setName"(arg0: StringJS): void
public "isDebug"(): boolean
public "addListener"(arg0: $Consumer$$Type<($WorldCreationUiState)>): void
public "isHardcore"(): boolean
public "isAllowCommands"(): boolean
public "setDifficulty"(arg0: $Difficulty$$Type): void
public "getDifficulty"(): $Difficulty
public "getGameRules"(): $GameRules
public "getGameMode"(): $WorldCreationUiState$SelectedGameMode
public "setAllowCommands"(arg0: boolean): void
public "getTargetFolder"(): StringJS
set "gameMode"(value: $WorldCreationUiState$SelectedGameMode$$Type)
get "worldType"(): $WorldCreationUiState$WorldTypeEntry
get "bonusChest"(): boolean
get "generateStructures"(): boolean
set "generateStructures"(value: boolean)
set "bonusChest"(value: boolean)
set "worldType"(value: $WorldCreationUiState$WorldTypeEntry$$Type)
get "presetEditor"(): $PresetEditor
get "normalPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
get "altPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
set "gameRules"(value: $GameRules$$Type)
set "settings"(value: $WorldCreationContext$$Type)
get "settings"(): $WorldCreationContext
set "seed"(value: StringJS)
get "seed"(): StringJS
get "name"(): StringJS
set "name"(value: StringJS)
get "debug"(): boolean
get "hardcore"(): boolean
get "allowCommands"(): boolean
set "difficulty"(value: $Difficulty$$Type)
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameMode"(): $WorldCreationUiState$SelectedGameMode
set "allowCommands"(value: boolean)
get "targetFolder"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$$Type = ($WorldCreationUiState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$$Original = $WorldCreationUiState;}
declare module "net.minecraft.client.gui.GuiSpriteManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$GuiSpriteScaling} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $GuiSpriteManager extends $TextureAtlasHolder {
constructor(arg0: $TextureManager$$Type)

public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getSpriteScaling"(arg0: $TextureAtlasSprite$$Type): $GuiSpriteScaling
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteManager$$Type = ($GuiSpriteManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteManager$$Original = $GuiSpriteManager;}
declare module "net.minecraft.client.gui.components.SubtitleOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$WeighedSoundEvents$$Type} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundEventListener$$Interface} from "net.minecraft.client.sounds.SoundEventListener"

export class $SubtitleOverlay implements $SoundEventListener$$Interface {
constructor(arg0: $Minecraft$$Type)

public "onPlaySound"(arg0: $SoundInstance$$Type, arg1: $WeighedSoundEvents$$Type, arg2: float): void
public "render"(arg0: $GuiGraphics$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubtitleOverlay$$Type = ($SubtitleOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SubtitleOverlay$$Original = $SubtitleOverlay;}
declare module "net.minecraft.client.gui.GuiGraphics" {
import {$GuiGraphics$ScissorStack, $GuiGraphics$ScissorStack$$Type} from "net.minecraft.client.gui.GuiGraphics$ScissorStack"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$DrawContextAccessor$$Interface} from "dev.tr7zw.trender.gui.impl.mixin.client.DrawContextAccessor"
import {$MultiBufferSource} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$DrawContextInvoker$$Interface} from "io.wispforest.owo.mixin.ui.DrawContextInvoker"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$IGuiGraphicsExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IGuiGraphicsExtension"
import {$Quaternionf$$Type} from "org.joml.Quaternionf"
import {$GuiRenderStateSink$$Interface} from "dev.isxander.yacl3.gui.render.GuiRenderStateSink"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$GuiGraphicsAccessor$$Interface} from "dev.shadowsoffire.apotheosis.mixin.client.GuiGraphicsAccessor"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$MatrixStackTransformer, $MatrixStackTransformer$$Interface} from "io.wispforest.owo.ui.util.MatrixStackTransformer"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$IMixinGuiGraphics$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGuiGraphics"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$GuiGraphicsAccessor$$Interface as $GuiGraphicsAccessor$0$$Interface} from "io.wispforest.accessories.mixin.client.GuiGraphicsAccessor"

export class $GuiGraphics implements $IGuiGraphicsExtension$$Interface, $GuiGraphicsAccessor$0$$Interface, $MatrixStackTransformer$$Interface, $DrawContextInvoker$$Interface, $DrawContextAccessor$$Interface, $GuiGraphicsAccessor$$Interface, $IMixinGuiGraphics$$Interface, $GuiRenderStateSink$$Interface {
 "minecraft": $Minecraft
static readonly "MIN_GUI_Z": float
static readonly "MAX_GUI_Z": float

constructor(arg0: $Minecraft$$Type, arg1: $MultiBufferSource$BufferSource$$Type)

public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "flush"(): void
public "fill"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fill"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "guiWidth"(): integer
public "guiHeight"(): integer
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: integer, arg10: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $TextureAtlasSprite$$Type): void
public "blit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $TextureAtlasSprite$$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "pose"(): $PoseStack
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: float, arg3: float, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: float, arg3: float, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): integer
public "bufferSource"(): $MultiBufferSource$BufferSource
/**
 * 
 * @deprecated
 */
public "drawManaged"(arg0: $Runnable$$Type): void
public "hLine"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "hLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "vLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "vLine"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "enableScissor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "disableScissor"(): void
public "containsPointInScissor"(arg0: integer, arg1: integer): boolean
public "fillGradient"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "fillGradient"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "fillGradient"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fillRenderType"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): void
public "drawWordWrap"(arg0: $Font$$Type, arg1: $FormattedText$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawStringWithBackdrop"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "blitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "innerBlit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "renderOutline"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "blitTiledSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "renderFakeItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderFakeItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "renderItemDecorations"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: StringJS): void
public "renderItemDecorations"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedCharSequence$$Type)>, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: ($TooltipComponent$$Type)?, arg3: integer, arg4: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: ($TooltipComponent$$Type)?, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedCharSequence$$Type)>, arg2: $ClientTooltipPositioner$$Type, arg3: integer, arg4: integer): void
public "renderTooltipInternal"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
public "renderComponentTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: integer, arg3: integer): void
public "renderComponentTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer, arg4: $ItemStack$$Type): void
public "renderComponentTooltipFromElements"(arg0: $Font$$Type, arg1: $List$$Type<($Either$$Type<($FormattedText$$Type), ($TooltipComponent$$Type)>)>, arg2: integer, arg3: integer, arg4: $ItemStack$$Type): void
public "renderComponentHoverEffect"(arg0: $Font$$Type, arg1: $Style$$Type, arg2: integer, arg3: integer): void
public "getMatrixStack"(): $PoseStack
public "yacl$bufferSource"(): $MultiBufferSource
public "callBlitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "owo$renderTooltipFromComponents"(arg0: $Font$$Type, arg1: $List$$Type, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
public "owo$getMatrices"(): $PoseStack
public "owo$setMatrices"(arg0: $PoseStack$$Type): void
public "owo$getScissorStack"(): $GuiGraphics$ScissorStack
public "owo$setScissorStack"(arg0: $GuiGraphics$ScissorStack$$Type): void
public "libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource
public "setTooltipStack"(arg0: $ItemStack$$Type): void
public "getTooltipStack"(): $ItemStack
public "getBufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
public "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
public "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
public "drawScrollingString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "scale"(x: float, y: float, z: float): $MatrixStackTransformer
public "multiply"(quaternion: $Quaternionf$$Type): $MatrixStackTransformer
public "multiply"(quaternion: $Quaternionf$$Type, originX: float, originY: float, originZ: float): $MatrixStackTransformer
public "push"(): $MatrixStackTransformer
public "pop"(): $MatrixStackTransformer
public "translate"(x: double, y: double, z: double): $MatrixStackTransformer
public "translate"(x: float, y: float, z: float): $MatrixStackTransformer
public "multiplyPositionMatrix"(matrix: $Matrix4f$$Type): $MatrixStackTransformer
public static "bufferSource"(arg0: $GuiGraphics$$Type): $MultiBufferSource
get "matrixStack"(): $PoseStack
set "tooltipStack"(value: $ItemStack$$Type)
get "tooltipStack"(): $ItemStack
get "bufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphics$$Type = ($GuiGraphics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphics$$Original = $GuiGraphics;}
declare module "net.minecraft.client.gui.LayeredDraw$Layer" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DeltaTracker, $DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export interface $LayeredDraw$Layer$$Interface {

(arg0: $GuiGraphics, arg1: $DeltaTracker): void
}

export class $LayeredDraw$Layer implements $LayeredDraw$Layer$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredDraw$Layer$$Type = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredDraw$Layer$$Original = $LayeredDraw$Layer;}
declare module "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen" {
import {$LevelSettings$$Type} from "net.minecraft.world.level.LevelSettings"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$WorldCreationUiState} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $CreateWorldScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static readonly "TAB_HEADER_BACKGROUND": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "getUiState"(): $WorldCreationUiState
public "onClose"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "repositionElements"(): void
public static "openFresh"(arg0: $Minecraft$$Type, arg1: $Screen$$Type): void
public static "createFromExisting"(arg0: $Minecraft$$Type, arg1: $Screen$$Type, arg2: $LevelSettings$$Type, arg3: $WorldCreationContext$$Type, arg4: $Path$$Type): $CreateWorldScreen
public "popScreen"(): void
public static "createTempDataPackDirFromExistingWorld"(arg0: $Path$$Type, arg1: $Minecraft$$Type): $Path
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "uiState"(): $WorldCreationUiState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateWorldScreen$$Type = ($CreateWorldScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateWorldScreen$$Original = $CreateWorldScreen;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation" {
import {$FocusNavigationEvent$$Interface} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Record} from "java.lang.Record"
import {$ScreenDirection} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent$$Interface {
constructor(arg0: boolean)

public "getVerticalDirectionForInitialFocus"(): $ScreenDirection
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "forward"(): boolean
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$TabNavigation$$Type = ({"forward"?: boolean}) | ([forward?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$TabNavigation$$Original = $FocusNavigationEvent$TabNavigation;}
declare module "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen" {
import {$ContainerScreenExtension$$Interface} from "io.wispforest.accessories.pond.ContainerScreenExtension"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$MenuAccess$$Interface} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerScreenAccessor$$Interface as $AbstractContainerScreenAccessor$0$$Interface} from "yalter.mousetweaks.mixin.AbstractContainerScreenAccessor"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$HandledScreenAccessor$$Interface as $HandledScreenAccessor$0$$Interface} from "io.wispforest.owo.mixin.ui.layers.HandledScreenAccessor"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DrawsOnLeft$$Interface} from "dev.shadowsoffire.placebo.util.DrawsOnLeft"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$HandledScreenAccessor$$Interface} from "eu.midnightdust.midnightcontrols.client.util.HandledScreenAccessor"
import {$AbstractContainerScreenAccessor$$Interface} from "io.wispforest.accessories.mixin.client.AbstractContainerScreenAccessor"

export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess$$Interface<(T)>, $DrawsOnLeft$$Interface, $AbstractContainerScreenAccessor$$Interface, $ContainerScreenExtension$$Interface, $HandledScreenAccessor$0$$Interface, $HandledScreenAccessor$$Interface, $AbstractContainerScreenAccessor$0$$Interface {
 "imageWidth": integer
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "clickedSlot": $Slot
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "quickCraftingType": integer
readonly "renderables": $List<($Renderable)>
 "hoveredSlot": $Slot
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
 "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "tick"(): void
public "onClose"(): void
public "getY"(): integer
public "removed"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isPauseScreen"(): boolean
public "getX"(): integer
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isHovering"(arg0: $Slot$$Type, arg1: double, arg2: double): boolean
public "renderSlot"(arg0: $GuiGraphics$$Type, arg1: $Slot$$Type): void
public static "renderSlotHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public static "renderSlotHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "handler$dno000$midnightcontrols$onRender"(context: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, delta: float, ci: $CallbackInfo$$Type): void
public "getSlotColor"(arg0: integer): integer
public "recalculateQuickCraftRemaining"(): void
public "findSlot"(arg0: double, arg1: double): $Slot
public "handler$bll000$apothic_attributes$apoth_superMouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double, arg5: $CallbackInfoReturnable$$Type): void
public "clearDraggingState"(): void
public "getMenu"(): T
public "getSlotUnderMouse"(): $Slot
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "forceRenderSlot"(context: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "accessories$getClickedSlot"(): $Slot
public "accessories$getDraggingItem"(): $ItemStack
public "accessories$isSplittingStack"(): boolean
public "accessories$getQuickCraftingType"(): integer
public "accessories$recalculateQuickCraftRemaining"(): void
public "accessories$leftPos"(): integer
public "accessories$topPos"(): integer
public "owo$getRootX"(): integer
public "owo$getRootY"(): integer
public "midnightcontrols$getSlotAt"(arg0: double, arg1: double): $Slot
public "midnightcontrols$isClickOutsideBounds"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer): boolean
public "midnightcontrols$onMouseClick"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
public "mousetweaks$invokeFindSlot"(arg0: double, arg1: double): $Slot
public "mousetweaks$invokeSlotClicked"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
public "mousetweaks$getIsQuickCrafting"(): boolean
public "mousetweaks$setIsQuickCrafting"(arg0: boolean): void
public "mousetweaks$getQuickCraftingButton"(): integer
public "mousetweaks$setSkipNextRelease"(arg0: boolean): void
public static "draw"(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
public "__ths"(): $AbstractContainerScreen<(never)>
public "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer): void
public "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer): void
public "isHovering_Logical"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
public "shouldRenderSlot"(slot: $Slot$$Type): boolean
public "hoverStackOffset"(): integer
public "isHovering_Rendering"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "y"(): integer
get "pauseScreen"(): boolean
get "x"(): integer
get "menu"(): T
get "slotUnderMouse"(): $Slot
get "guiLeft"(): integer
get "guiTop"(): integer
get "XSize"(): integer
get "YSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreen$$Type<T> = ($AbstractContainerScreen<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerScreen$$Original<T> = $AbstractContainerScreen<(T)>;}
declare module "net.minecraft.client.gui.components.toasts.TutorialToast$Icons" {
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $TutorialToast$Icons extends $Enum<($TutorialToast$Icons)> {
static readonly "MOUSE": $TutorialToast$Icons
static readonly "WOODEN_PLANKS": $TutorialToast$Icons
static readonly "MOVEMENT_KEYS": $TutorialToast$Icons
static readonly "RIGHT_CLICK": $TutorialToast$Icons
static readonly "TREE": $TutorialToast$Icons
static readonly "SOCIAL_INTERACTIONS": $TutorialToast$Icons
static readonly "RECIPE_BOOK": $TutorialToast$Icons

public static "values"(): ($TutorialToast$Icons)[]
public static "valueOf"(arg0: StringJS): $TutorialToast$Icons
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialToast$Icons$$Type = (("movement_keys") | ("mouse") | ("tree") | ("recipe_book") | ("wooden_planks") | ("social_interactions") | ("right_click"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialToast$Icons$$Original = $TutorialToast$Icons;}
declare module "net.minecraft.client.gui.components.TabOrderedElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TabOrderedElement$$Interface {
get "tabOrderGroup"(): integer
}

export class $TabOrderedElement implements $TabOrderedElement$$Interface {
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabOrderedElement$$Type = ($TabOrderedElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TabOrderedElement$$Original = $TabOrderedElement;}
declare module "net.minecraft.client.gui.components.WidgetSprites" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $WidgetSprites extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)

public "get"(arg0: boolean, arg1: boolean): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): $ResourceLocation
public "disabled"(): $ResourceLocation
public "disabledFocused"(): $ResourceLocation
public "enabledFocused"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetSprites$$Type = ({"enabled"?: $ResourceLocation$$Type, "disabledFocused"?: $ResourceLocation$$Type, "disabled"?: $ResourceLocation$$Type, "enabledFocused"?: $ResourceLocation$$Type}) | ([enabled?: $ResourceLocation$$Type, disabledFocused?: $ResourceLocation$$Type, disabled?: $ResourceLocation$$Type, enabledFocused?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetSprites$$Original = $WidgetSprites;}
declare module "net.minecraft.client.gui.components.DebugScreenOverlay" {
import {$DebugScreenOverlay$AllocationRateCalculator$$Type} from "net.minecraft.client.gui.components.DebugScreenOverlay$AllocationRateCalculator"
import {$Map} from "java.util.Map"
import {$Heightmap$Types} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$LocalSampleLogger} from "net.minecraft.util.debugchart.LocalSampleLogger"
import {$List} from "java.util.List"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $DebugScreenOverlay {
 "renderFpsCharts": boolean
static readonly "HEIGHTMAP_NAMES": $Map<($Heightmap$Types), (StringJS)>
 "renderProfilerChart": boolean

constructor(arg0: $Minecraft$$Type)

public "handler$fbn000$betterf3$addAutomaticDebugOption"(minecraft: $Minecraft$$Type, ci: $CallbackInfo$$Type): void
public "handler$fbl000$betterf3$renderBefore"(context: $GuiGraphics$$Type, ci: $CallbackInfo$$Type): void
public "handler$fbl000$betterf3$renderAnimation"(context: $GuiGraphics$$Type, ci: $CallbackInfo$$Type): void
public "handler$ekd000$entityculling$getLeftText"(callback: $CallbackInfoReturnable$$Type): $List
public "showFpsCharts"(): boolean
public "getBandwidthLogger"(): $LocalSampleLogger
public "handler$fbl000$betterf3$renderFontScaleBefore"(context: $GuiGraphics$$Type, ci: $CallbackInfo$$Type): void
public "handler$fbk000$betterf3$drawText"(guiGraphics: $GuiGraphics$$Type, ci: $CallbackInfo$$Type): void
public "getPingLogger"(): $LocalSampleLogger
public "logRemoteSample"(arg0: (long)[], arg1: $RemoteDebugSampleType$$Type): void
public "clearChunkCache"(): void
public "getTickTimeLogger"(): $LocalSampleLogger
public "redirect$fbl000$betterf3$allocationRateCalculatorGet"(instance: $DebugScreenOverlay$AllocationRateCalculator$$Type, allocatedBytes: long): long
public "reset"(): void
public "render"(arg0: $GuiGraphics$$Type): void
public "showProfilerChart"(): boolean
public "showDebugScreen"(): boolean
public "logFrameDuration"(arg0: long): void
public "toggleProfilerChart"(): void
public "toggleFpsCharts"(): void
public "toggleNetworkCharts"(): void
public "toggleOverlay"(): void
public "showNetworkCharts"(): boolean
get "bandwidthLogger"(): $LocalSampleLogger
get "pingLogger"(): $LocalSampleLogger
get "tickTimeLogger"(): $LocalSampleLogger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugScreenOverlay$$Type = ($DebugScreenOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugScreenOverlay$$Original = $DebugScreenOverlay;}
declare module "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<(T)> {
 "imageWidth": integer
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "clickedSlot": $Slot
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "quickCraftingType": integer
readonly "renderables": $List<($Renderable)>
 "hoveredSlot": $Slot
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
 "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "canSeeEffects"(): boolean
public static "draw"(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectRenderingInventoryScreen$$Type<T> = ($EffectRenderingInventoryScreen<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectRenderingInventoryScreen$$Original<T> = $EffectRenderingInventoryScreen<(T)>;}
declare module "net.minecraft.client.gui.components.AbstractWidget" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$UniqueWidget$$Interface} from "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget"
import {$ClickableWidgetAccessor$$Interface} from "io.wispforest.owo.mixin.ui.access.ClickableWidgetAccessor"
import {$IMixinAbstractWidget$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinAbstractWidget"
import {$ComponentExtension$$Interface} from "io.wispforest.accessories.pond.owo.ComponentExtension"
import {$ClickableWidgetAccessor$$Interface as $ClickableWidgetAccessor$0$$Interface} from "eu.midnightdust.midnightcontrols.client.mixin.ClickableWidgetAccessor"
import {$LayoutElement$$Interface} from "net.minecraft.client.gui.layouts.LayoutElement"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$CustomizableWidget$$Interface} from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget"
import {$Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Duration$$Type} from "java.time.Duration"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ComponentStub$$Interface} from "io.wispforest.owo.ui.inject.ComponentStub"
import {$Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$VanillaWidgetComponent} from "io.wispforest.owo.ui.component.VanillaWidgetComponent"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type} from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$List, $List$$Type} from "java.util.List"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAudio, $IAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"
import {$WidgetTooltipHolder} from "net.minecraft.client.gui.components.WidgetTooltipHolder"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$IMixinAbstractWidget$$Interface as $IMixinAbstractWidget$0$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinAbstractWidget"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$RenderableResource, $RenderableResource$$Type} from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry$$Interface} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$IAbstractWidgetExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IAbstractWidgetExtension"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $AbstractWidget implements $Renderable$$Interface, $GuiEventListener$$Interface, $LayoutElement$$Interface, $NarratableEntry$$Interface, $IAbstractWidgetExtension$$Interface, $IMixinAbstractWidget$$Interface, $ComponentStub$$Interface, $ComponentExtension$$Interface, $ClickableWidgetAccessor$$Interface, $ClickableWidgetAccessor$0$$Interface, $IMixinAbstractWidget$0$$Interface, $UniqueWidget$$Interface, $CustomizableWidget$$Interface {
static readonly "UNSET_FG_COLOR": integer
 "visible": boolean
 "active": boolean

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type)

public "setX"(arg0: integer): void
public "xOffset"(): integer
public "yOffset"(): integer
public "owo$setX"(arg0: integer): void
public "owo$setY"(arg0: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "configure"(closure: $Consumer$$Type): $Component$0
public "getY"(): integer
public "setSize"(arg0: integer, arg1: integer): void
public "parent"(): $ParentComponent
public "inflate"(space: $Size$$Type): void
public "update"(delta: float, mouseX: integer, mouseY: integer): void
public "x"(): integer
public "getMessage"(): $Component
public "id"(id: StringJS): $Component$0
public "id"(): StringJS
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "tooltip"(tooltip: $List$$Type): $Component$0
public "tooltip"(): $List
public "isActive"(): boolean
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "getRight"(): integer
public "setMessage"(arg0: $Component$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "setTooltipDelay"(arg0: $Duration$$Type): void
public static "wrapDefaultNarrationMessage"(arg0: $Component$$Type): $MutableComponent
/**
 * 
 * @deprecated
 */
public "onClick"(arg0: double, arg1: double): void
public "onRelease"(arg0: double, arg1: double): void
public "playDownSound"(arg0: $SoundManager$$Type): void
public "isHoveredOrFocused"(): boolean
public "getFGColor"(): integer
public "setFGColor"(arg0: integer): void
public "clearFGColor"(): void
public "getBottom"(): integer
public "setRectangle"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setTabOrderGroup"(arg0: integer): void
public "allowIndividualOverdraw"(): boolean
public "allowIndividualOverdraw"(value: boolean): $Component$0
public "dismount"(reason: $Component$DismountReason$$Type): void
public "focusHandler"(): $FocusHandler
public "positioning"(positioning: $Positioning$$Type): $Component$0
public "positioning"(): $AnimatableProperty
public "margins"(): $AnimatableProperty
public "margins"(margins: $Insets$$Type): $Component$0
public "horizontalSizing"(): $AnimatableProperty
public "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component$0
public "verticalSizing"(verticalSizing: $Sizing$$Type): $Component$0
public "verticalSizing"(): $AnimatableProperty
public "mouseDown"(): $EventSource
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "cursorStyle"(style: $CursorStyle$$Type): $Component$0
public "cursorStyle"(): $CursorStyle
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseUp"(): $EventSource
public "mouseScroll"(): $EventSource
public "mouseDrag"(): $EventSource
public "keyPress"(): $EventSource
public "focusGained"(): $EventSource
public "focusLost"(): $EventSource
public "mouseEnter"(): $EventSource
public "mouseLeave"(): $EventSource
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "canFocus"(source: $Component$FocusSource$$Type): boolean
public "onFocusGained"(source: $Component$FocusSource$$Type): void
public "onFocusLost"(): void
public "parseProperties"(spec: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type): void
public "zIndex"(): integer
public "zIndex"(zIndex: integer): $Component$0
public "widgetWrapper"(): $VanillaWidgetComponent
public "widthOffset"(): integer
public "heightOffset"(): integer
public "updateX"(x: integer): void
public "updateY"(y: integer): void
public "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type): void
public "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
public "getResetCustomizationsListenersFancyMenu"(): $List
public "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type): void
public "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type): void
public "getHoverStateListenersFancyMenu"(): $List
public "getFocusStateListenersFancyMenu"(): $List
public "getHoverOrFocusStateListenersFancyMenu"(): $List
public "getLastHoverStateFancyMenu"(): boolean
public "setLastHoverStateFancyMenu"(arg0: boolean): void
public "getLastFocusStateFancyMenu"(): boolean
public "setLastFocusStateFancyMenu"(arg0: boolean): void
public "getLastHoverOrFocusStateFancyMenu"(): boolean
public "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
public "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
public "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
public "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
public "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
public "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
public "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
public "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
public "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
public "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
public "setHiddenFancyMenu"(arg0: boolean): void
public "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
public "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
public "setCustomWidthFancyMenu"(arg0: integer): void
public "setCustomHeightFancyMenu"(arg0: integer): void
public "setCustomXFancyMenu"(arg0: integer): void
public "setCustomYFancyMenu"(arg0: integer): void
public "resetWidgetSizeAndPositionFancyMenu"(): void
public "getCustomLabelFancyMenu"(): $Component
public "getHoverLabelFancyMenu"(): $Component
public "getCustomClickSoundFancyMenu"(): $IAudio
public "getHoverSoundFancyMenu"(): $IAudio
public "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
public "setNineSliceBorderX_FancyMenu"(arg0: integer): void
public "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
public "setNineSliceBorderY_FancyMenu"(arg0: integer): void
public "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
public "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
public "getCustomWidthFancyMenu"(): integer
public "getCustomHeightFancyMenu"(): integer
public "getCustomXFancyMenu"(): integer
public "getCustomYFancyMenu"(): integer
public "getWidgetIdentifierFancyMenu"(): StringJS
public "setHeightKonkrete"(arg0: integer): void
public "owo$setHeight"(arg0: integer): void
public "owo$setWidth"(arg0: integer): void
public "owo$getTooltip"(): $WidgetTooltipHolder
public "getAlphaFancyMenu"(): float
public "setHeightFancyMenu"(arg0: integer): void
public "setMessageFieldFancyMenu"(arg0: $Component$$Type): void
public "getX"(): integer
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public static "renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
public "setFocused"(arg0: boolean): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "charTyped"(): $EventSource
public "isFocused"(): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getTabOrderGroup"(): integer
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "getRectangle"(): $ScreenRectangle
public "getTooltip"(): $Tooltip
public "setY"(arg0: integer): void
public "setWidgetIdentifierFancyMenu"(arg0: StringJS): $AbstractWidget
public "visitWidgets"(arg0: $Consumer$$Type<($AbstractWidget)>): void
public "isHiddenFancyMenu"(): boolean
public "setAlpha"(arg0: float): void
public "setTooltip"(arg0: $Tooltip$$Type): void
public "resetWidgetCustomizationsFancyMenu"(): void
public "isHovered"(): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "mouseMoved"(arg0: double, arg1: double): void
public "setPosition"(arg0: integer, arg1: integer): void
public "onClick"(arg0: double, arg1: double, arg2: integer): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public "tickFocusStateListenersFancyMenu"(arg0: boolean): void
public "stopHoverSoundFancyMenu"(): void
public "stopCustomClickSoundFancyMenu"(): void
public "tickHoverStateListenersFancyMenu"(arg0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
public "getOriginalMessageFancyMenu"(): $Component
public "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "remove"(): void
public "root"(): $ParentComponent
public "tooltip"(tooltip: $Component$$Type): $Component$0
public "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
public "sizing"(sizing: $Sizing$$Type): $Component$0
public "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
public "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "isInBoundingBox"(x: double, y: double): boolean
public "hasParent"(): boolean
public "fullSize"(): $Size
public "baseX"(): integer
public "baseY"(): integer
public "moveTo"(x: integer, y: integer): void
public "intersects"(other: $PositionedRectangle$$Type): boolean
public "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
get "message"(): $Component
get "right"(): integer
set "message"(value: $Component$$Type)
set "tooltipDelay"(value: $Duration$$Type)
get "hoveredOrFocused"(): boolean
get "FGColor"(): integer
set "FGColor"(value: integer)
get "bottom"(): integer
set "tabOrderGroup"(value: integer)
get "resetCustomizationsListenersFancyMenu"(): $List
get "hoverStateListenersFancyMenu"(): $List
get "focusStateListenersFancyMenu"(): $List
get "hoverOrFocusStateListenersFancyMenu"(): $List
get "lastHoverStateFancyMenu"(): boolean
set "lastHoverStateFancyMenu"(value: boolean)
get "lastFocusStateFancyMenu"(): boolean
set "lastFocusStateFancyMenu"(value: boolean)
get "lastHoverOrFocusStateFancyMenu"(): boolean
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
get "customBackgroundNormalFancyMenu"(): $RenderableResource
get "customBackgroundHoverFancyMenu"(): $RenderableResource
get "customBackgroundInactiveFancyMenu"(): $RenderableResource
set "customBackgroundNormalFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundHoverFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundInactiveFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundResetBehaviorFancyMenu"(value: $CustomizableWidget$CustomBackgroundResetBehavior$$Type)
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
set "customClickSoundFancyMenu"(value: $IAudio$$Type)
set "hiddenFancyMenu"(value: boolean)
set "customLabelFancyMenu"(value: $Component$$Type)
set "hoverLabelFancyMenu"(value: $Component$$Type)
set "customWidthFancyMenu"(value: integer)
set "customHeightFancyMenu"(value: integer)
set "customXFancyMenu"(value: integer)
set "customYFancyMenu"(value: integer)
get "customLabelFancyMenu"(): $Component
get "hoverLabelFancyMenu"(): $Component
get "customClickSoundFancyMenu"(): $IAudio
get "hoverSoundFancyMenu"(): $IAudio
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
set "nineSliceBorderX_FancyMenu"(value: integer)
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
set "nineSliceBorderY_FancyMenu"(value: integer)
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "customBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
get "customWidthFancyMenu"(): integer
get "customHeightFancyMenu"(): integer
get "customXFancyMenu"(): integer
get "customYFancyMenu"(): integer
get "widgetIdentifierFancyMenu"(): StringJS
set "heightKonkrete"(value: integer)
get "alphaFancyMenu"(): float
set "heightFancyMenu"(value: integer)
set "messageFieldFancyMenu"(value: $Component$$Type)
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
set "focused"(value: boolean)
get "focused"(): boolean
get "tabOrderGroup"(): integer
get "rectangle"(): $ScreenRectangle
set "widgetIdentifierFancyMenu"(value: StringJS)
get "hiddenFancyMenu"(): boolean
set "alpha"(value: float)
get "hovered"(): boolean
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWidget$$Type = ($AbstractWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractWidget$$Original = $AbstractWidget;}
declare module "net.minecraft.client.gui.components.ChatComponent$State" {
import {$ChatComponent$DelayedMessageDeletion$$Type} from "net.minecraft.client.gui.components.ChatComponent$DelayedMessageDeletion"
import {$List$$Type} from "java.util.List"
import {$GuiMessage$$Type} from "net.minecraft.client.GuiMessage"

export class $ChatComponent$State {
constructor(arg0: $List$$Type<($GuiMessage$$Type)>, arg1: $List$$Type<(StringJS)>, arg2: $List$$Type<($ChatComponent$DelayedMessageDeletion$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$State$$Type = ($ChatComponent$State);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$State$$Original = $ChatComponent$State;}
declare module "net.minecraft.client.gui.screens.worldselection.PresetEditor" {
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$WorldCreationContext, $WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$WorldPreset} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CreateWorldScreen, $CreateWorldScreen$$Type} from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"

export interface $PresetEditor$$Interface {

(arg0: $CreateWorldScreen, arg1: $WorldCreationContext): $Screen$$Type
}

export class $PresetEditor implements $PresetEditor$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "EDITORS": $Map<($Optional<($ResourceKey<($WorldPreset)>)>), ($PresetEditor)>

 "createEditScreen"(arg0: $CreateWorldScreen$$Type, arg1: $WorldCreationContext$$Type): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresetEditor$$Type = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PresetEditor$$Original = $PresetEditor;}
declare module "net.minecraft.client.gui.components.Button" {
import {$IMixinButton$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinButton"
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Button$Builder} from "net.minecraft.client.gui.components.Button$Builder"
import {$Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$AbstractButton} from "net.minecraft.client.gui.components.AbstractButton"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ButtonWidgetAccessor$$Interface} from "io.wispforest.owo.mixin.ui.access.ButtonWidgetAccessor"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $Button extends $AbstractButton implements $ButtonWidgetAccessor$$Interface, $IMixinButton$$Interface {
 "visible": boolean
 "active": boolean
static readonly "DEFAULT_WIDTH": integer
static readonly "UNSET_FG_COLOR": integer
static readonly "DEFAULT_HEIGHT": integer
static readonly "SMALL_WIDTH": integer
static readonly "BIG_WIDTH": integer
static readonly "DEFAULT_SPACING": integer

public "owo$setOnPress"(arg0: $Button$OnPress$$Type): void
public "setPressActionFancyMenu"(arg0: $Button$OnPress$$Type): void
public static "builder"(arg0: $Component$$Type, arg1: $Button$OnPress$$Type): $Button$Builder
public "updateWidgetNarration"(arg0: $NarrationElementOutput$$Type): void
public "onPress"(): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
set "pressActionFancyMenu"(value: $Button$OnPress$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$$Type = ($Button);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$$Original = $Button;}
declare module "net.minecraft.client.gui.screens.Overlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"

export class $Overlay implements $Renderable$$Interface {
constructor()

public "isPauseScreen"(): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$$Type = ($Overlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Overlay$$Original = $Overlay;}
declare module "net.minecraft.client.gui.components.toasts.Toast" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast$Visibility, $Toast$Visibility$$Type} from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import {$ToastComponent, $ToastComponent$$Type} from "net.minecraft.client.gui.components.toasts.ToastComponent"

export interface $Toast$$Interface {

(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: long): $Toast$Visibility$$Type
get "token"(): any
}

export class $Toast implements $Toast$$Interface {
static readonly "NO_TOKEN": any
static readonly "SLOT_HEIGHT": integer

 "slotCount"(): integer
 "getToken"(): any
 "width"(): integer
 "height"(): integer
 "render"(arg0: $GuiGraphics$$Type, arg1: $ToastComponent$$Type, arg2: long): $Toast$Visibility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toast$$Type = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: long) => $Toast$Visibility$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Toast$$Original = $Toast;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation" {
import {$FocusNavigationEvent$$Interface} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Record} from "java.lang.Record"
import {$ScreenDirection, $ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent$$Interface {
constructor(arg0: $ScreenDirection$$Type)

public "getVerticalDirectionForInitialFocus"(): $ScreenDirection
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "direction"(): $ScreenDirection
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$ArrowNavigation$$Type = ({"direction"?: $ScreenDirection$$Type}) | ([direction?: $ScreenDirection$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$ArrowNavigation$$Original = $FocusNavigationEvent$ArrowNavigation;}
declare module "net.minecraft.client.gui.components.events.GuiEventListener" {
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$TabOrderedElement$$Interface} from "net.minecraft.client.gui.components.TabOrderedElement"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $GuiEventListener$$Interface extends $TabOrderedElement$$Interface {
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export class $GuiEventListener implements $GuiEventListener$$Interface {
static readonly "DOUBLE_CLICK_THRESHOLD_MS": long

 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "setFocused"(arg0: boolean): void
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getCurrentFocusPath"(): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "mouseMoved"(arg0: double, arg1: double): void
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiEventListener$$Type = ($GuiEventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiEventListener$$Original = $GuiEventListener;}
declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent" {
import {$TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $ClientTooltipComponent$$Interface {
get "height"(): integer
}

export class $ClientTooltipComponent implements $ClientTooltipComponent$$Interface {
 "renderText"(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $Matrix4f$$Type, arg4: $MultiBufferSource$BufferSource$$Type): void
 "getWidth"(arg0: $Font$$Type): integer
 "getHeight"(): integer
static "create"(arg0: $FormattedCharSequence$$Type): $ClientTooltipComponent
static "create"(arg0: $TooltipComponent$$Type): $ClientTooltipComponent
 "renderImage"(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $GuiGraphics$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTooltipComponent$$Type = ($ClientTooltipComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTooltipComponent$$Original = $ClientTooltipComponent;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenu" {
import {$SpectatorMenuItem} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$SpectatorMenuCategory, $SpectatorMenuCategory$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuCategory"
import {$SpectatorPage} from "net.minecraft.client.gui.spectator.categories.SpectatorPage"
import {$List} from "java.util.List"
import {$SpectatorMenuListener$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuListener"

export class $SpectatorMenu {
static readonly "EMPTY_SLOT": $SpectatorMenuItem

constructor(arg0: $SpectatorMenuListener$$Type)

public "getItems"(): $List<($SpectatorMenuItem)>
public "getCurrentPage"(): $SpectatorPage
public "getSelectedSlot"(): integer
public "getSelectedItem"(): $SpectatorMenuItem
public "selectCategory"(arg0: $SpectatorMenuCategory$$Type): void
public "getItem"(arg0: integer): $SpectatorMenuItem
public "exit"(): void
public "selectSlot"(arg0: integer): void
public "getSelectedCategory"(): $SpectatorMenuCategory
get "items"(): $List<($SpectatorMenuItem)>
get "currentPage"(): $SpectatorPage
get "selectedSlot"(): integer
get "selectedItem"(): $SpectatorMenuItem
get "selectedCategory"(): $SpectatorMenuCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenu$$Type = ($SpectatorMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenu$$Original = $SpectatorMenu;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext" {
import {$LayeredRegistryAccess, $LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$WorldDimensions, $WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$WorldOptions, $WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"
import {$WorldCreationContext$DimensionsUpdater$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import {$LevelStem, $LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$WorldCreationContext$OptionsModifier$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryLayer, $RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$WorldGenSettings$$Type} from "net.minecraft.world.level.levelgen.WorldGenSettings"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$Record} from "java.lang.Record"

export class $WorldCreationContext extends $Record {
constructor(arg0: $WorldGenSettings$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $ReloadableServerResources$$Type, arg3: $WorldDataConfiguration$$Type)
constructor(options: $WorldOptions$$Type, datapackDimensions: $Registry$$Type<($LevelStem$$Type)>, selectedDimensions: $WorldDimensions$$Type, worldgenRegistries: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, dataPackResources: $ReloadableServerResources$$Type, dataConfiguration: $WorldDataConfiguration$$Type)
constructor(arg0: $WorldOptions$$Type, arg1: $WorldDimensions$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $ReloadableServerResources$$Type, arg4: $WorldDataConfiguration$$Type)

public "withOptions"(arg0: $WorldCreationContext$OptionsModifier$$Type): $WorldCreationContext
public "dataConfiguration"(): $WorldDataConfiguration
public "datapackDimensions"(): $Registry<($LevelStem)>
public "dataPackResources"(): $ReloadableServerResources
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(): void
public "options"(): $WorldOptions
public "selectedDimensions"(): $WorldDimensions
public "worldgenLoadContext"(): $RegistryAccess$Frozen
public "withSettings"(arg0: $WorldOptions$$Type, arg1: $WorldDimensions$$Type): $WorldCreationContext
public "withDimensions"(arg0: $WorldCreationContext$DimensionsUpdater$$Type): $WorldCreationContext
public "withDataConfiguration"(arg0: $WorldDataConfiguration$$Type): $WorldCreationContext
public "worldgenRegistries"(): $LayeredRegistryAccess<($RegistryLayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$$Type = ({"datapackDimensions"?: $Registry$$Type<($LevelStem$$Type)>, "dataPackResources"?: $ReloadableServerResources$$Type, "dataConfiguration"?: $WorldDataConfiguration$$Type, "options"?: $WorldOptions$$Type, "selectedDimensions"?: $WorldDimensions$$Type, "worldgenRegistries"?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>}) | ([datapackDimensions?: $Registry$$Type<($LevelStem$$Type)>, dataPackResources?: $ReloadableServerResources$$Type, dataConfiguration?: $WorldDataConfiguration$$Type, options?: $WorldOptions$$Type, selectedDimensions?: $WorldDimensions$$Type, worldgenRegistries?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$$Original = $WorldCreationContext;}
declare module "net.minecraft.client.gui.navigation.ScreenRectangle" {
import {$ScreenPosition, $ScreenPosition$$Type} from "net.minecraft.client.gui.navigation.ScreenPosition"
import {$ScreenAxis$$Type} from "net.minecraft.client.gui.navigation.ScreenAxis"
import {$Record} from "java.lang.Record"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenRectangle extends $Record {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $ScreenPosition$$Type, arg1: integer, arg2: integer)

public "intersection"(arg0: $ScreenRectangle$$Type): $ScreenRectangle
public "overlaps"(arg0: $ScreenRectangle$$Type): boolean
public "bottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLength"(arg0: $ScreenAxis$$Type): integer
public "position"(): $ScreenPosition
public static "of"(arg0: $ScreenAxis$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ScreenRectangle
public static "empty"(): $ScreenRectangle
public "top"(): integer
public "left"(): integer
public "right"(): integer
public "step"(arg0: $ScreenDirection$$Type): $ScreenRectangle
public "width"(): integer
public "height"(): integer
public "containsPoint"(arg0: integer, arg1: integer): boolean
public "getBorder"(arg0: $ScreenDirection$$Type): $ScreenRectangle
public "getBoundInDirection"(arg0: $ScreenDirection$$Type): integer
public "overlapsInAxis"(arg0: $ScreenRectangle$$Type, arg1: $ScreenAxis$$Type): boolean
public "getCenterInAxis"(arg0: $ScreenAxis$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenRectangle$$Type = ({"height"?: integer, "position"?: $ScreenPosition$$Type, "width"?: integer}) | ([height?: integer, position?: $ScreenPosition$$Type, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenRectangle$$Original = $ScreenRectangle;}
declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner" {
import {$Vector2ic, $Vector2ic$$Type} from "org.joml.Vector2ic"

export interface $ClientTooltipPositioner$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Vector2ic$$Type
}

export class $ClientTooltipPositioner implements $ClientTooltipPositioner$$Interface {
 "positionTooltip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Vector2ic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTooltipPositioner$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => $Vector2ic$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTooltipPositioner$$Original = $ClientTooltipPositioner;}
declare module "net.minecraft.client.gui.components.EditBox" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TextFieldWidgetAccessor$$Interface} from "io.wispforest.owo.mixin.ui.access.TextFieldWidgetAccessor"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GreedyInputComponent$$Interface} from "io.wispforest.owo.ui.inject.GreedyInputComponent"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$EditBoxAccessor$$Interface} from "journeymap.common.mixin.client.EditBoxAccessor"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$WidgetSprites} from "net.minecraft.client.gui.components.WidgetSprites"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IMixinEditBox$$Interface as $IMixinEditBox$0$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinEditBox"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$IMixinEditBox$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinEditBox"
import {$AccessEditBox$$Interface} from "com.blamejared.searchables.mixin.AccessEditBox"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $EditBox extends $AbstractWidget implements $Renderable$$Interface, $IMixinEditBox$0$$Interface, $AccessEditBox$$Interface, $GreedyInputComponent$$Interface, $TextFieldWidgetAccessor$$Interface, $EditBoxAccessor$$Interface, $IMixinEditBox$$Interface {
static readonly "SPRITES": $WidgetSprites
 "canLoseFocus": boolean
 "visible": boolean
static readonly "BACKWARDS": integer
 "responder": $Consumer<(StringJS)>
 "active": boolean
static readonly "DEFAULT_TEXT_COLOR": integer
 "textColor": integer
 "displayPos": integer
static readonly "UNSET_FG_COLOR": integer
static readonly "FORWARDS": integer
readonly "font": $Font

constructor(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $Component$$Type)
constructor(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Component$$Type)
constructor(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $EditBox$$Type, arg6: $Component$$Type)

public "moveCursorToEnd"(arg0: boolean): void
public "moveCursor"(arg0: integer, arg1: boolean): void
public "moveCursorTo"(arg0: integer, arg1: boolean): void
public "moveCursorToStart"(arg0: boolean): void
public "deleteText"(arg0: integer): void
public "deleteWords"(arg0: integer): void
public "deleteChars"(arg0: integer): void
public "deleteCharsToPos"(arg0: integer): void
public "getTextColor"(): integer
public "setSuggestion"(arg0: StringJS): void
public "setTextShadow"(arg0: boolean): void
public "isEditable"(): boolean
public "setEditable"(arg0: boolean): void
public "setHighlightPos"(arg0: integer): void
public "setTextColorUneditable"(arg0: integer): void
public "setCursorPosition"(arg0: integer): void
public "renderHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getWordPosition"(arg0: integer): integer
public "getHighlighted"(): StringJS
public "getInnerWidth"(): integer
public "isBordered"(): boolean
public "getScreenX"(arg0: integer): integer
public "getTextShadow"(): boolean
public "getIsEditableKonkrete"(): boolean
public "getHightlightPosKonkrete"(): integer
public "getMaxLengthKonkrete"(): integer
public "onValueChangeKonkrete"(arg0: StringJS): void
public "searchables$getFilter"(): $Predicate
public "searchables$getResponder"(): $Consumer
public "owo$drawsBackground"(): boolean
public "getUneditableTextColor"(): integer
public "getSuggestion"(): StringJS
public "getHint"(): $Component
public "getFocusTime"(): long
public "getHighlightPos"(): integer
public "invokeRenderHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getIsEditableFancyMenu"(): boolean
public "getDisplayPosFancyMenu"(): integer
public "setDisplayPosFancyMenu"(arg0: integer): void
public "getBorderedFancyMenu"(): boolean
public "getMaxLengthFancyMenu"(): integer
public "getFormatterFancyMenu"(): $BiFunction
public "getHighlightPosFancyMenu"(): integer
public "invokeDeleteTextFancyMenu"(arg0: integer): void
public "getTextColorFancyMenu"(): integer
public "getTextColorUneditableFancyMenu"(): integer
public "getFocusedTimeFancyMenu"(): long
public "getHintFancyMenu"(): $Component
public "getSuggestionFancyMenu"(): StringJS
public "invokeRenderHighlightFancyMenu"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "setFilter"(arg0: $Predicate$$Type<(StringJS)>): void
public "setFormatter"(arg0: $BiFunction$$Type<(StringJS), (integer), ($FormattedCharSequence$$Type)>): void
public "getFormatter"(): $BiFunction
public "maxLength"(): integer
public "getValue"(): StringJS
public "setValue"(arg0: StringJS): void
public "getMaxLength"(): integer
public "setVisible"(arg0: boolean): void
public "renderWidget"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "onClick"(arg0: double, arg1: double): void
public "playDownSound"(arg0: $SoundManager$$Type): void
public "updateWidgetNarration"(arg0: $NarrationElementOutput$$Type): void
public "onFocusGained"(source: $Component$FocusSource$$Type): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getCursorPosition"(): integer
public "isVisible"(): boolean
public "setMaxLength"(arg0: integer): void
public "setBordered"(arg0: boolean): void
public "setResponder"(arg0: $Consumer$$Type<(StringJS)>): void
public "setFocused"(arg0: boolean): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "insertText"(arg0: StringJS): void
public "setCanLoseFocus"(arg0: boolean): void
public "setTextColor"(arg0: integer): void
public "setHint"(arg0: $Component$$Type): void
public "canConsumeInput"(): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
set "suggestion"(value: StringJS)
set "textShadow"(value: boolean)
get "editable"(): boolean
set "editable"(value: boolean)
set "highlightPos"(value: integer)
set "textColorUneditable"(value: integer)
set "cursorPosition"(value: integer)
get "highlighted"(): StringJS
get "innerWidth"(): integer
get "bordered"(): boolean
get "textShadow"(): boolean
get "isEditableKonkrete"(): boolean
get "hightlightPosKonkrete"(): integer
get "maxLengthKonkrete"(): integer
get "uneditableTextColor"(): integer
get "suggestion"(): StringJS
get "hint"(): $Component
get "focusTime"(): long
get "highlightPos"(): integer
get "isEditableFancyMenu"(): boolean
get "displayPosFancyMenu"(): integer
set "displayPosFancyMenu"(value: integer)
get "borderedFancyMenu"(): boolean
get "maxLengthFancyMenu"(): integer
get "formatterFancyMenu"(): $BiFunction
get "highlightPosFancyMenu"(): integer
get "textColorFancyMenu"(): integer
get "textColorUneditableFancyMenu"(): integer
get "focusedTimeFancyMenu"(): long
get "hintFancyMenu"(): $Component
get "suggestionFancyMenu"(): StringJS
set "filter"(value: $Predicate$$Type<(StringJS)>)
set "formatter"(value: $BiFunction$$Type<(StringJS), (integer), ($FormattedCharSequence$$Type)>)
get "formatter"(): $BiFunction
get "value"(): StringJS
set "value"(value: StringJS)
get "cursorPosition"(): integer
set "bordered"(value: boolean)
set "focused"(value: boolean)
set "hint"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditBox$$Type = ($EditBox);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EditBox$$Original = $EditBox;}
declare module "net.minecraft.client.gui.components.BossHealthOverlay" {
import {$ClientboundBossEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import {$Map} from "java.util.Map"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$IMixinBossHealthOverlay$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinBossHealthOverlay"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $BossHealthOverlay implements $IMixinBossHealthOverlay$$Interface {
constructor(arg0: $Minecraft$$Type)

public "reset"(): void
public "update"(arg0: $ClientboundBossEventPacket$$Type): void
public "shouldCreateWorldFog"(): boolean
public "render"(arg0: $GuiGraphics$$Type): void
public "shouldDarkenScreen"(): boolean
public "shouldPlayMusic"(): boolean
public "get_events_FancyMenu"(): $Map
public "handler$fbo002$betterf3$init"(info: $CallbackInfo$$Type): void
get "_events_FancyMenu"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossHealthOverlay$$Type = ($BossHealthOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossHealthOverlay$$Original = $BossHealthOverlay;}
declare module "net.minecraft.client.gui.screens.Screen$NarratableSearchResult" {
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$$Type} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $Screen$NarratableSearchResult {
readonly "entry": $NarratableEntry
readonly "index": integer
readonly "priority": $NarratableEntry$NarrationPriority

constructor(arg0: $NarratableEntry$$Type, arg1: integer, arg2: $NarratableEntry$NarrationPriority$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$NarratableSearchResult$$Type = ($Screen$NarratableSearchResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$NarratableSearchResult$$Original = $Screen$NarratableSearchResult;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuCategory" {
import {$SpectatorMenuItem} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $SpectatorMenuCategory$$Interface {
get "items"(): $List<($SpectatorMenuItem)>
get "prompt"(): $Component
}

export class $SpectatorMenuCategory implements $SpectatorMenuCategory$$Interface {
 "getItems"(): $List<($SpectatorMenuItem)>
 "getPrompt"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuCategory$$Type = ($SpectatorMenuCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuCategory$$Original = $SpectatorMenuCategory;}
declare module "net.minecraft.client.gui.font.FontManager" {
import {$Map} from "java.util.Map"
import {$FontResourceManagerAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.FontResourceManagerAccess"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$FontSet} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $FontManager implements $PreparableReloadListener$$Interface, $AutoCloseable$$Interface, $FontResourceManagerAccess$$Interface {
readonly "fontSets": $Map<($ResourceLocation), ($FontSet)>
static readonly "MISSING_FONT": $ResourceLocation

constructor(arg0: $TextureManager$$Type)

public "getFontSets"(): $Map
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "close"(): void
public "createFont"(): $Font
public "createFontFilterFishy"(): $Font
public "updateOptions"(arg0: $Options$$Type): void
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontManager$$Type = ($FontManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontManager$$Original = $FontManager;}
declare module "net.minecraft.client.gui.layouts.LayoutElement" {
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LayoutElement$$Interface {
set "x"(value: integer)
get "width"(): integer
get "height"(): integer
get "y"(): integer
get "x"(): integer
get "rectangle"(): $ScreenRectangle
set "y"(value: integer)
}

export class $LayoutElement implements $LayoutElement$$Interface {
 "setX"(arg0: integer): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): integer
 "getX"(): integer
 "getRectangle"(): $ScreenRectangle
 "setY"(arg0: integer): void
 "setPosition"(arg0: integer, arg1: integer): void
 "visitWidgets"(arg0: $Consumer$$Type<($AbstractWidget)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayoutElement$$Type = ($LayoutElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayoutElement$$Original = $LayoutElement;}
declare module "net.minecraft.client.gui.Font" {
import {$FontAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.FontAccessor"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringSplitter} from "net.minecraft.client.StringSplitter"
import {$IFontExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IFontExtension"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$IAntiquable$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.IAntiquable"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$JadeFont$$Interface} from "snownee.jade.gui.JadeFont"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $Font implements $IFontExtension$$Interface, $IAntiquable$$Interface, $JadeFont$$Interface, $FontAccessor$$Interface {
readonly "random": $RandomSource
readonly "filterFishyGlyphs": boolean
readonly "fonts": $Function<($ResourceLocation), ($FontSet)>
static readonly "ALPHA_CUTOFF": integer
readonly "lineHeight": integer
 "splitter": $StringSplitter

constructor(arg0: $Function$$Type<($ResourceLocation), ($FontSet$$Type)>, arg1: boolean)

public "plainSubstrByWidth"(arg0: StringJS, arg1: integer, arg2: boolean): StringJS
public "plainSubstrByWidth"(arg0: StringJS, arg1: integer): StringJS
public "getFontSet"(arg0: $ResourceLocation$$Type): $FontSet
public "bidirectionalShaping"(arg0: StringJS): StringJS
public "drawInBatch8xOutline"(arg0: $FormattedCharSequence$$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: integer): void
public "create$getFonts"(): $Function
public "jade$setGlint"(arg0: float, arg1: float): void
public "jade$setGlintStrength"(arg0: float, arg1: float): void
public "substrByWidth"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
public "wordWrapHeight"(arg0: $FormattedText$$Type, arg1: integer): integer
public "wordWrapHeight"(arg0: StringJS, arg1: integer): integer
public "supplementaries$setAntique"(hasInk: boolean): void
public "supplementaries$isAntique"(): boolean
public "renderText"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): float
public "split"(arg0: $FormattedText$$Type, arg1: integer): $List<($FormattedCharSequence)>
public "self"(): $Font
public "width"(arg0: $FormattedText$$Type): integer
public "width"(arg0: StringJS): integer
public "width"(arg0: $FormattedCharSequence$$Type): integer
public "isBidirectional"(): boolean
public "drawInBatch"(arg0: $Component$$Type, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: $FormattedCharSequence$$Type, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer, arg10: boolean): integer
public "getSplitter"(): $StringSplitter
public "ellipsize"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
get "bidirectional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$$Type = ($Font);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$$Original = $Font;}
declare module "net.minecraft.client.gui.screens.inventory.MenuAccess" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $MenuAccess$$Interface<T extends $AbstractContainerMenu> {

(): T
get "menu"(): T
}

export class $MenuAccess<T extends $AbstractContainerMenu> implements $MenuAccess$$Interface {
 "getMenu"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuAccess$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuAccess$$Original<T> = $MenuAccess<(T)>;}
declare module "net.minecraft.client.gui.screens.social.PlayerSocialManager" {
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Set} from "java.util.Set"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export class $PlayerSocialManager {
constructor(arg0: $Minecraft$$Type, arg1: $UserApiService$$Type)

public "hidePlayer"(arg0: $UUID$$Type): void
public "showPlayer"(arg0: $UUID$$Type): void
public "getDiscoveredUUID"(arg0: StringJS): $UUID
public "handler$bee000$supplementaries$supp$removePlayer"(id: $UUID$$Type, ci: $CallbackInfo$$Type): void
public "handler$bee000$supplementaries$supp$getPlayer"(info: $PlayerInfo$$Type, ci: $CallbackInfo$$Type): void
public "isHidden"(arg0: $UUID$$Type): boolean
public "stopOnlineMode"(): void
public "isBlocked"(arg0: $UUID$$Type): boolean
public "shouldHideMessageFrom"(arg0: $UUID$$Type): boolean
public "startOnlineMode"(): void
public "getHiddenPlayers"(): $Set<($UUID)>
public "addPlayer"(arg0: $PlayerInfo$$Type): void
public "removePlayer"(arg0: $UUID$$Type): void
get "hiddenPlayers"(): $Set<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSocialManager$$Type = ($PlayerSocialManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSocialManager$$Original = $PlayerSocialManager;}
declare module "net.minecraft.client.gui.narration.NarrationThunk" {
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $NarrationThunk<T> {
static readonly "EMPTY": $NarrationThunk<(never)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: StringJS): $NarrationThunk<(never)>
public static "from"(arg0: $Component$$Type): $NarrationThunk<(never)>
public static "from"(arg0: $List$$Type<($Component$$Type)>): $NarrationThunk<(never)>
public "getText"(arg0: $Consumer$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationThunk$$Type<T> = ($NarrationThunk<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationThunk$$Original<T> = $NarrationThunk<(T)>;}
declare module "net.minecraft.client.gui.font.FontOption$Filter" {
import {$FontOption$$Type} from "net.minecraft.client.gui.font.FontOption"
import {$Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set$$Type} from "java.util.Set"

export class $FontOption$Filter {
static readonly "CODEC": $Codec<($FontOption$Filter)>
static readonly "ALWAYS_PASS": $FontOption$Filter

constructor(arg0: $Map$$Type<($FontOption$$Type), (boolean)>)

public "apply"(arg0: $Set$$Type<($FontOption$$Type)>): boolean
public "merge"(arg0: $FontOption$Filter$$Type): $FontOption$Filter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontOption$Filter$$Type = ($FontOption$Filter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontOption$Filter$$Original = $FontOption$Filter;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode" {
import {$Enum} from "java.lang.Enum"
import {$GameType} from "net.minecraft.world.level.GameType"
import {$Component} from "net.minecraft.network.chat.Component"

export class $WorldCreationUiState$SelectedGameMode extends $Enum<($WorldCreationUiState$SelectedGameMode)> {
static readonly "SURVIVAL": $WorldCreationUiState$SelectedGameMode
readonly "gameType": $GameType
readonly "displayName": $Component
static readonly "CREATIVE": $WorldCreationUiState$SelectedGameMode
static readonly "DEBUG": $WorldCreationUiState$SelectedGameMode
static readonly "HARDCORE": $WorldCreationUiState$SelectedGameMode

public "getInfo"(): $Component
public static "values"(): ($WorldCreationUiState$SelectedGameMode)[]
public static "valueOf"(arg0: StringJS): $WorldCreationUiState$SelectedGameMode
get "info"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$SelectedGameMode$$Type = (("survival") | ("hardcore") | ("creative") | ("debug"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$SelectedGameMode$$Original = $WorldCreationUiState$SelectedGameMode;}
declare module "net.minecraft.client.gui.screens.MenuScreens$ScreenConstructor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuScreens$ScreenConstructor$$Interface<T extends $AbstractContainerMenu, U extends $Screen> {

(arg0: T, arg1: $Inventory, arg2: $Component): U
}

export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> implements $MenuScreens$ScreenConstructor$$Interface {
 "fromPacket"(arg0: $Component$$Type, arg1: $MenuType$$Type<(T)>, arg2: $Minecraft$$Type, arg3: integer): void
 "create"(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type): U
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuScreens$ScreenConstructor$$Type<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuScreens$ScreenConstructor$$Original<T, U> = $MenuScreens$ScreenConstructor<(T), (U)>;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier" {
import {$UnaryOperator, $UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$WorldOptions, $WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"

export interface $WorldCreationContext$OptionsModifier$$Interface extends $UnaryOperator$$Interface<($WorldOptions)> {

(arg0: $WorldOptions): $WorldOptions$$Type
}

export class $WorldCreationContext$OptionsModifier implements $WorldCreationContext$OptionsModifier$$Interface {
static "identity"<T>(): $UnaryOperator<($WorldOptions)>
 "apply"(arg0: $WorldOptions$$Type): $WorldOptions
 "compose"<V>(arg0: $Function$$Type<(V), ($WorldOptions$$Type)>): $Function<(V), ($WorldOptions)>
 "andThen"<V>(arg0: $Function$$Type<($WorldOptions), (V)>): $Function<($WorldOptions), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$OptionsModifier$$Type = ((arg0: $WorldOptions) => $WorldOptions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$OptionsModifier$$Original = $WorldCreationContext$OptionsModifier;}
declare module "net.minecraft.client.gui.MapRenderer" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$MapDecorationTextureManager$$Type} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$MapAtlasTexture} from "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture"
import {$IMapRenderer$$Interface} from "net.raphimc.immediatelyfast.injection.interfaces.IMapRenderer"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $MapRenderer implements $AutoCloseable$$Interface, $IMapRenderer$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $MapDecorationTextureManager$$Type)

public "update"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "close"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $MapId$$Type, arg3: $MapItemSavedData$$Type, arg4: boolean, arg5: integer): void
public "resetData"(): void
public "immediatelyFast$getMapAtlasTexture"(id: integer): $MapAtlasTexture
public "immediatelyFast$getAtlasMapping"(mapId: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRenderer$$Type = ($MapRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRenderer$$Original = $MapRenderer;}
declare module "net.minecraft.client.gui.screens.ReceivingLevelScreen" {
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Component} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$IMixinReceivingLevelScreen$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinReceivingLevelScreen"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $ReceivingLevelScreen extends $Screen implements $IMixinReceivingLevelScreen$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $BooleanSupplier$$Type, arg1: $ReceivingLevelScreen$Reason$$Type)

public "tick"(): void
public "onClose"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isPauseScreen"(): boolean
public "shouldCloseOnEsc"(): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "setCreatedAtFancyMenu"(arg0: long): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "pauseScreen"(): boolean
set "createdAtFancyMenu"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReceivingLevelScreen$$Type = ($ReceivingLevelScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReceivingLevelScreen$$Original = $ReceivingLevelScreen;}
declare module "net.minecraft.client.gui.components.WidgetTooltipHolder" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$Duration$$Type} from "java.time.Duration"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export class $WidgetTooltipHolder {
constructor()

public "get"(): $Tooltip
public "set"(arg0: $Tooltip$$Type): void
public "setDelay"(arg0: $Duration$$Type): void
public "refreshTooltipForNextRenderPass"(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle$$Type): void
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
set "delay"(value: $Duration$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetTooltipHolder$$Type = ($WidgetTooltipHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetTooltipHolder$$Original = $WidgetTooltipHolder;}
declare module "net.minecraft.client.gui.screens.Screen" {
import {$IMixinScreen$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinScreen"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$AccessorScreen$$Interface} from "vazkii.patchouli.mixin.client.AccessorScreen"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Layer$$Type} from "io.wispforest.owo.ui.layers.Layer"
import {$ScreenAccessor$$Interface} from "dev.tr7zw.trender.gui.impl.mixin.client.ScreenAccessor"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$CustomizableScreen$$Interface} from "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen"
import {$Renderable, $Renderable$$Type, $Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$AbstractContainerEventHandler} from "net.minecraft.client.gui.components.events.AbstractContainerEventHandler"
import {$OwoScreenExtension$$Interface} from "io.wispforest.owo.util.pond.OwoScreenExtension"
import {$FocusNavigationEvent$TabNavigation} from "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation"
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$ScreenAccessor$$Interface as $ScreenAccessor$0$$Interface} from "io.wispforest.owo.mixin.ScreenAccessor"
import {$Screen$NarratableSearchResult} from "net.minecraft.client.gui.screens.Screen$NarratableSearchResult"
import {$ScreenAccessor$$Interface as $ScreenAccessor$2$$Interface} from "net.createmod.ponder.mixin.client.accessor.ScreenAccessor"
import {$IMixinScreen$$Interface as $IMixinScreen$0$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen"
import {$Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$Layer$Instance} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$FocusNavigationEvent$ArrowNavigation} from "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation"
import {$Path$$Type} from "java.nio.file.Path"
import {$Music} from "net.minecraft.sounds.Music"
import {$ScreenAccessor$$Interface as $ScreenAccessor$1$$Interface} from "journeymap.common.mixin.client.ScreenAccessor"

export class $Screen extends $AbstractContainerEventHandler implements $Renderable$$Interface, $IMixinScreen$$Interface, $AccessorScreen$$Interface, $ScreenAccessor$0$$Interface, $ScreenAccessor$$Interface, $ScreenAccessor$1$$Interface, $ScreenAccessor$2$$Interface, $IMixinScreen$0$$Interface, $CustomizableScreen$$Interface, $OwoScreenExtension$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "tick"(): void
public "children"(): $List<($GuiEventListener)>
public "onClose"(): void
public "init"(arg0: $Minecraft$$Type, arg1: integer, arg2: integer): void
public "removeOnInitChildrenFancyMenu"(): $List
public "clearFocus"(): void
public "resize"(arg0: $Minecraft$$Type, arg1: integer, arg2: integer): void
public "added"(): void
public "removed"(): void
public "getMinecraft"(): $Minecraft
public "setInitialized"(arg0: boolean): void
public "getTitle"(): $Component
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "isCopy"(arg0: integer): boolean
public "isPauseScreen"(): boolean
public "addWidget"<T extends $GuiEventListener>(arg0: T): T
public "getRenderables"(): $List
public "getChildrenFancyMenu"(): $List
public "getRenderablesFancyMenu"(): $List
public "getNarratablesFancyMenu"(): $List
public "getNarratables"(): $List
public "addRenderableWidget"<T extends $GuiEventListener>(arg0: T): T
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public static "getTooltipFromItem"(arg0: $Minecraft$$Type, arg1: $ItemStack$$Type): $List<($Component)>
public static "wrapScreenError"(arg0: $Runnable$$Type, arg1: StringJS, arg2: StringJS): void
public static "hasControlDown"(): boolean
public "getBackgroundMusic"(): $Music
public static "hasShiftDown"(): boolean
public static "hasAltDown"(): boolean
public "getNarrationMessage"(): $Component
public "renderWithTooltip"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "shouldCloseOnEsc"(): boolean
public "createTabEvent"(): $FocusNavigationEvent$TabNavigation
public "createArrowEvent"(arg0: $ScreenDirection$$Type): $FocusNavigationEvent$ArrowNavigation
public "setInitialFocus"(arg0: $GuiEventListener$$Type): void
public "addRenderableOnly"<T extends $Renderable>(arg0: T): T
public "handleComponentClicked"(arg0: $Style$$Type): boolean
public "triggerImmediateNarration"(arg0: boolean): void
public "handler$doe000$midnightcontrols$addCloseButton"(client: $Minecraft$$Type, width: integer, height: integer, ci: $CallbackInfo$$Type): void
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "renderMenuBackgroundTexture"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public "renderTransparentBackground"(arg0: $GuiGraphics$$Type): void
public static "isCut"(arg0: integer): boolean
public static "isPaste"(arg0: integer): boolean
public static "isSelectAll"(arg0: integer): boolean
public "isMouseOver"(arg0: double, arg1: double): boolean
public "onFilesDrop"(arg0: $List$$Type<($Path$$Type)>): void
public "afterMouseMove"(): void
public "afterMouseAction"(): void
public "afterKeyboardAction"(): void
public "handleDelayedNarration"(): void
public static "findNarratableWidget"(arg0: $List$$Type<($NarratableEntry$$Type)>, arg1: $NarratableEntry$$Type): $Screen$NarratableSearchResult
public "updateNarratorStatus"(arg0: boolean): void
public "setTooltipForNextRenderPass"(arg0: $List$$Type<($FormattedCharSequence$$Type)>): void
public "setTooltipForNextRenderPass"(arg0: $List$$Type<($FormattedCharSequence$$Type)>, arg1: $ClientTooltipPositioner$$Type, arg2: boolean): void
public "setTooltipForNextRenderPass"(arg0: $Component$$Type): void
public "setTooltipForNextRenderPass"(arg0: $Tooltip$$Type, arg1: $ClientTooltipPositioner$$Type, arg2: boolean): void
public "getRectangle"(): $ScreenRectangle
public "owo$updateLayers"(): void
public "owo$getInstance"(layer: $Layer$$Type): $Layer$Instance
public "owo$getInstancesView"(): $List
public "setFontKonkrete"(arg0: $Font$$Type): void
public "getRenderablesKonkrete"(): $List
public "getChildrenKonkrete"(): $List
public "invokeAddWidgetKonkrete"(arg0: $GuiEventListener$$Type): $GuiEventListener
public "invokeAddRenderableWidgetKonkrete"(arg0: $GuiEventListener$$Type): $GuiEventListener
public static "PANORAMA_RENDERER$owo_$md$b00d76$0"(): $CubeMap
public static "ROTATING_PANORAMA_RENDERER$owo_$md$b00d76$1"(): $PanoramaRenderer
public "owo$addDrawableChild"(arg0: $GuiEventListener$$Type): $GuiEventListener
public "libgui$getChildren"(): $List
public "catnip$getRenderables"(): $List
public "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$$Type): void
public "get_initialized_FancyMenu"(): boolean
public "invoke_init_FancyMenu"(): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "minecraft"(): $Minecraft
set "initialized"(value: boolean)
get "pauseScreen"(): boolean
get "childrenFancyMenu"(): $List
get "renderablesFancyMenu"(): $List
get "narratablesFancyMenu"(): $List
get "backgroundMusic"(): $Music
get "narrationMessage"(): $Component
set "initialFocus"(value: $GuiEventListener$$Type)
set "tooltipForNextRenderPass"(value: $List$$Type<($FormattedCharSequence$$Type)>)
set "tooltipForNextRenderPass"(value: $Component$$Type)
get "rectangle"(): $ScreenRectangle
set "fontKonkrete"(value: $Font$$Type)
get "renderablesKonkrete"(): $List
get "childrenKonkrete"(): $List
get "_initialized_FancyMenu"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$$Type = ($Screen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$$Original = $Screen;}
declare module "net.minecraft.client.gui.components.Button$CreateNarration" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export interface $Button$CreateNarration$$Interface {

(arg0: $Supplier<($MutableComponent$$Type)>): $MutableComponent$$Type
}

export class $Button$CreateNarration implements $Button$CreateNarration$$Interface {
 "createNarrationMessage"(arg0: $Supplier$$Type<($MutableComponent$$Type)>): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$CreateNarration$$Type = ((arg0: $Supplier<($MutableComponent)>) => $MutableComponent$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$CreateNarration$$Original = $Button$CreateNarration;}
declare module "net.minecraft.client.gui.navigation.ScreenAxis" {
import {$Enum} from "java.lang.Enum"
import {$ScreenDirection} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenAxis extends $Enum<($ScreenAxis)> {
static readonly "VERTICAL": $ScreenAxis
static readonly "HORIZONTAL": $ScreenAxis

public "getNegative"(): $ScreenDirection
public static "values"(): ($ScreenAxis)[]
public static "valueOf"(arg0: StringJS): $ScreenAxis
public "getDirection"(arg0: boolean): $ScreenDirection
public "orthogonal"(): $ScreenAxis
public "getPositive"(): $ScreenDirection
get "negative"(): $ScreenDirection
get "positive"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAxis$$Type = (("horizontal") | ("vertical"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAxis$$Original = $ScreenAxis;}
declare module "net.minecraft.client.gui.components.spectator.SpectatorGui" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SpectatorMenuListener$$Interface} from "net.minecraft.client.gui.spectator.SpectatorMenuListener"
import {$SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export class $SpectatorGui implements $SpectatorMenuListener$$Interface {
constructor(arg0: $Minecraft$$Type)

public "renderHotbar"(arg0: $GuiGraphics$$Type): void
public "renderTooltip"(arg0: $GuiGraphics$$Type): void
public "onHotbarSelected"(arg0: integer): void
public "onMouseMiddleClick"(): void
public "isMenuActive"(): boolean
public "onMouseScrolled"(arg0: integer): void
public "onSpectatorMenuClosed"(arg0: $SpectatorMenu$$Type): void
get "menuActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorGui$$Type = ($SpectatorGui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorGui$$Original = $SpectatorGui;}
declare module "net.minecraft.client.gui.GuiGraphics$ScissorStack" {
import {$ScreenRectangle, $ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"

export class $GuiGraphics$ScissorStack {
public "push"(arg0: $ScreenRectangle$$Type): $ScreenRectangle
public "pop"(): $ScreenRectangle
public "containsPoint"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphics$ScissorStack$$Type = ($GuiGraphics$ScissorStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphics$ScissorStack$$Original = $GuiGraphics$ScissorStack;}
declare module "net.minecraft.client.gui.components.SplashRenderer" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IMixinSplashRenderer$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinSplashRenderer"
import {$Font$$Type} from "net.minecraft.client.gui.Font"

export class $SplashRenderer implements $IMixinSplashRenderer$$Interface {
static readonly "CHRISTMAS": $SplashRenderer
static readonly "HALLOWEEN": $SplashRenderer
static readonly "NEW_YEAR": $SplashRenderer

constructor(arg0: StringJS)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: $Font$$Type, arg3: integer): void
public "getSplashFancyMenu"(): StringJS
get "splashFancyMenu"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashRenderer$$Type = ($SplashRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashRenderer$$Original = $SplashRenderer;}
declare module "net.minecraft.client.gui.components.AbstractButton" {
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$AbstractButtonExtension$$Interface} from "io.wispforest.accessories.client.gui.AbstractButtonExtension"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ButtonEvents$AdjustRendering$$Type} from "io.wispforest.accessories.client.gui.ButtonEvents$AdjustRendering"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $AbstractButton extends $AbstractWidget implements $AbstractButtonExtension$$Interface {
static readonly "UNSET_FG_COLOR": integer
 "visible": boolean
 "active": boolean

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type)

public "renderString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: integer): void
public "getRenderingEvent"(): $Event
public "onClick"(arg0: double, arg1: double): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "onPress"(): void
public "adjustRendering"<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering$$Type): B
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
get "renderingEvent"(): $Event
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractButton$$Type = ($AbstractButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractButton$$Original = $AbstractButton;}
declare module "net.minecraft.client.gui.components.toasts.TutorialToast" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast$Visibility} from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ToastComponent$$Type} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$Toast$$Interface} from "net.minecraft.client.gui.components.toasts.Toast"
import {$TutorialToast$Icons$$Type} from "net.minecraft.client.gui.components.toasts.TutorialToast$Icons"

export class $TutorialToast implements $Toast$$Interface {
static readonly "PROGRESS_BAR_HEIGHT": integer
static readonly "PROGRESS_BAR_X": integer
static readonly "PROGRESS_BAR_WIDTH": integer
static readonly "PROGRESS_BAR_Y": integer

constructor(arg0: $TutorialToast$Icons$$Type, arg1: $Component$$Type, arg2: $Component$$Type, arg3: boolean)

public "hide"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $ToastComponent$$Type, arg2: long): $Toast$Visibility
public "updateProgress"(arg0: float): void
public "slotCount"(): integer
public "getToken"(): any
public "width"(): integer
public "height"(): integer
get "token"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialToast$$Type = ($TutorialToast);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialToast$$Original = $TutorialToast;}
declare module "net.minecraft.client.gui.components.ChatComponent$DelayedMessageDeletion" {
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Record} from "java.lang.Record"

export class $ChatComponent$DelayedMessageDeletion extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$DelayedMessageDeletion$$Type = ({"signature"?: $MessageSignature$$Type, "deletableAfter"?: integer}) | ([signature?: $MessageSignature$$Type, deletableAfter?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$DelayedMessageDeletion$$Original = $ChatComponent$DelayedMessageDeletion;}
declare module "net.minecraft.client.gui.navigation.ScreenPosition" {
import {$ScreenAxis$$Type} from "net.minecraft.client.gui.navigation.ScreenAxis"
import {$Record} from "java.lang.Record"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenPosition extends $Record {
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ScreenAxis$$Type, arg1: integer, arg2: integer): $ScreenPosition
public "x"(): integer
public "y"(): integer
public "step"(arg0: $ScreenDirection$$Type): $ScreenPosition
public "getCoordinate"(arg0: $ScreenAxis$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenPosition$$Type = ({"x"?: integer, "y"?: integer}) | ([x?: integer, y?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenPosition$$Original = $ScreenPosition;}
declare module "net.minecraft.client.gui.components.events.AbstractContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Optional} from "java.util.Optional"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$ContainerEventHandler$$Interface} from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export class $AbstractContainerEventHandler implements $ContainerEventHandler$$Interface {
constructor()

public "isDragging"(): boolean
public "setDragging"(arg0: boolean): void
public "getFocused"(): $GuiEventListener
public "setFocused"(arg0: $GuiEventListener$$Type): void
public "children"(): $List<($GuiEventListener)>
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "setFocused"(arg0: boolean): void
public "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "isFocused"(): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "getCurrentFocusPath"(): $ComponentPath
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getRectangle"(): $ScreenRectangle
public "mouseMoved"(arg0: double, arg1: double): void
public "getTabOrderGroup"(): integer
get "dragging"(): boolean
set "dragging"(value: boolean)
get "focused"(): $GuiEventListener
set "focused"(value: $GuiEventListener$$Type)
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerEventHandler$$Type = ($AbstractContainerEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerEventHandler$$Original = $AbstractContainerEventHandler;}
declare module "net.minecraft.client.gui.Font$DisplayMode" {
import {$Enum} from "java.lang.Enum"

export class $Font$DisplayMode extends $Enum<($Font$DisplayMode)> {
static readonly "POLYGON_OFFSET": $Font$DisplayMode
static readonly "SEE_THROUGH": $Font$DisplayMode
static readonly "NORMAL": $Font$DisplayMode

public static "values"(): ($Font$DisplayMode)[]
public static "valueOf"(arg0: StringJS): $Font$DisplayMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$DisplayMode$$Type = (("normal") | ("see_through") | ("polygon_offset"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$DisplayMode$$Original = $Font$DisplayMode;}
declare module "net.minecraft.client.gui.ComponentPath" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ContainerEventHandler$$Type} from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export interface $ComponentPath$$Interface {
}

export class $ComponentPath implements $ComponentPath$$Interface {
 "component"(): $GuiEventListener
static "path"(arg0: $ContainerEventHandler$$Type, arg1: $ComponentPath$$Type): $ComponentPath
static "path"(arg0: $GuiEventListener$$Type, ...arg1: ($ContainerEventHandler$$Type)[]): $ComponentPath
static "leaf"(arg0: $GuiEventListener$$Type): $ComponentPath
 "applyFocus"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentPath$$Type = ($ComponentPath);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentPath$$Original = $ComponentPath;}
declare module "net.minecraft.client.gui.components.toasts.ToastComponent" {
import {$ToastComponent$ToastInstance} from "net.minecraft.client.gui.components.toasts.ToastComponent$ToastInstance"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Toast, $Toast$$Type} from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastComponent {
readonly "visible": $List<($ToastComponent$ToastInstance<(never)>)>

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "getMinecraft"(): $Minecraft
public "render"(arg0: $GuiGraphics$$Type): void
public "getToast"<T extends $Toast>(arg0: $Class$$Type<(T)>, arg1: any): T
public "getNotificationDisplayTimeMultiplier"(): double
public "addToast"(arg0: $Toast$$Type): void
get "minecraft"(): $Minecraft
get "notificationDisplayTimeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToastComponent$$Type = ($ToastComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToastComponent$$Original = $ToastComponent;}
declare module "net.minecraft.client.gui.font.FontSet" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$BakedGlyph} from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import {$FontOption$$Type} from "net.minecraft.client.gui.font.FontOption"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List$$Type} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$GlyphProvider$Conditional$$Type} from "com.mojang.blaze3d.font.GlyphProvider$Conditional"
import {$GlyphInfo, $GlyphInfo$$Type} from "com.mojang.blaze3d.font.GlyphInfo"

export class $FontSet implements $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type)

public "getGlyph"(arg0: integer): $BakedGlyph
public "getGlyphInfo"(arg0: integer, arg1: boolean): $GlyphInfo
public "reload"(arg0: $Set$$Type<($FontOption$$Type)>): void
public "reload"(arg0: $List$$Type<($GlyphProvider$Conditional$$Type)>, arg1: $Set$$Type<($FontOption$$Type)>): void
public "name"(): $ResourceLocation
public "close"(): void
public "whiteGlyph"(): $BakedGlyph
public "getRandomGlyph"(arg0: $GlyphInfo$$Type): $BakedGlyph
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontSet$$Type = ($FontSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontSet$$Original = $FontSet;}
declare module "net.minecraft.client.gui.components.Button$Builder" {
import {$Button$CreateNarration$$Type} from "net.minecraft.client.gui.components.Button$CreateNarration"
import {$Function$$Type} from "java.util.function.Function"
import {$Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export class $Button$Builder {
constructor(arg0: $Component$$Type, arg1: $Button$OnPress$$Type)

public "createNarration"(arg0: $Button$CreateNarration$$Type): $Button$Builder
public "size"(arg0: integer, arg1: integer): $Button$Builder
public "bounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Button$Builder
public "tooltip"(arg0: $Tooltip$$Type): $Button$Builder
public "pos"(arg0: integer, arg1: integer): $Button$Builder
public "build"(): $Button
public "build"(arg0: $Function$$Type<($Button$Builder), ($Button$$Type)>): $Button
public "width"(arg0: integer): $Button$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$Builder$$Type = ($Button$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$Builder$$Original = $Button$Builder;}
