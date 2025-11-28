import Script from 'next/script';

type SchemaType = 'InsuranceAgency' | 'FinancialProduct' | 'FAQPage';

interface SchemaOrgProps {
    type: SchemaType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

export default function SchemaOrg({ type, data }: SchemaOrgProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
    };

    return (
        <Script
            id={`schema-${type}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
