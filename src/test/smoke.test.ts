import { describe, expect, it } from 'vitest';

describe('@axionic/ui entry point smoke tests', () => {
	it('exports cn and cx from utils', async () => {
		const mod = await import('../utils');
		expect(typeof mod.cn).toBe('function');
		expect(typeof mod.cx).toBe('function');
	});

	it('@axionic/ui/preset exports createAxionicPreset and color scales', async () => {
		const mod = await import('../preset/index');
		expect(typeof mod.createAxionicPreset).toBe('function');
		expect(typeof mod.axionicTeal).toBe('object');
		expect(typeof mod.axionicSand).toBe('object');
	});

	it('@axionic/ui/primitives exports key components', async () => {
		const mod = await import('../components/ui/index');
		expect(mod.Button).toBeDefined();
		expect(mod.Dialog).toBeDefined();
		expect(mod.Card).toBeDefined();
		expect(mod.Toaster).toBeDefined();
		expect(mod.Switch).toBeDefined();
	});

	it('@axionic/ui/patterns exports the core pattern surface', async () => {
		const mod = await import('../components/patterns/index');
		expect(mod.ActivityTable).toBeDefined();
		expect(mod.FeatureCard).toBeDefined();
		expect(mod.IconBadge).toBeDefined();
		expect(mod.StatCard).toBeDefined();
		expect(mod.ActionCard).toBeDefined();
		expect(mod.CreditPill).toBeDefined();
		expect(mod.CredentialCard).toBeDefined();
		expect(mod.OptionRow).toBeDefined();
		expect(mod.DetailDialog).toBeDefined();
		expect(mod.DetailPanel).toBeDefined();
		expect(mod.HeroPanel).toBeDefined();
		expect(mod.MetricRail).toBeDefined();
		expect(mod.PageIntro).toBeDefined();
		expect(mod.PickerField).toBeDefined();
		expect(mod.ResourceList).toBeDefined();
		expect(mod.SecondaryNav).toBeDefined();
		expect(mod.SecretField).toBeDefined();
		expect(mod.SectionPanel).toBeDefined();
		expect(mod.ListToolbar).toBeDefined();
		expect(mod.SelectionToolbar).toBeDefined();
		expect(mod.SettingsSectionNav).toBeDefined();
		expect(mod.SidebarNav).toBeDefined();
		expect(mod.StepCard).toBeDefined();
		expect(mod.EmptyState).toBeDefined();
		expect(mod.HelpPanel).toBeDefined();
		expect(mod.HelpTrigger).toBeDefined();
		expect(mod.FileTree).toBeDefined();
		expect(mod.LineChart).toBeDefined();
		expect(mod.StatusBanner).toBeDefined();
		expect(mod.StreamingStatus).toBeDefined();
		expect(mod.SupportPanel).toBeDefined();
		expect(mod.TopToolbar).toBeDefined();
	});

	it('@axionic/ui/layout exports all layout components', async () => {
		const mod = await import('../components/layout/index');
		expect(mod.AppShell).toBeDefined();
		expect(mod.Section).toBeDefined();
		expect(mod.DarkSection).toBeDefined();
		expect(mod.SplitSection).toBeDefined();
		expect(mod.PageHeader).toBeDefined();
	});

	it('@axionic/ui/forms exports form components', async () => {
		const mod = await import('../components/forms/index');
		expect(mod.FormField).toBeDefined();
		expect(mod.FormMessage).toBeDefined();
		expect(mod.FormAlert).toBeDefined();
	});
});
