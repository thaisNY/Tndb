import React from 'react';

export default function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div style={{ marginBottom: '16px', textAlign: 'left' }}>
      <label style={{ color: '#888', fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        style={{
          width: '100%', background: '#1a1a1a', border: '1px solid #333',
          borderRadius: '8px', padding: '12px', color: '#fff', outline: 'none'
        }}
      />
    </div>
  );
}